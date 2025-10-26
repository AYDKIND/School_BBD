import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './AdminLogin.css';

const AdminLogin = () => {
  const [loginData, setLoginData] = useState({
    userID: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLogging, setIsLogging] = useState(false);
  const navigate = useNavigate();

  // Demo credentials for admin
  const DEMO_CREDENTIALS = {
    userID: 'admin2024',
    password: 'admin123'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (loginError) {
      setLoginError('');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLogging(true);
    setLoginError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Verify credentials
    if (loginData.userID === DEMO_CREDENTIALS.userID && 
        loginData.password === DEMO_CREDENTIALS.password) {
      // Successful login - redirect to admin dashboard
      navigate('/admin/dashboard');
    } else {
      setLoginError('Invalid User ID or Password. Please try again.');
    }
    
    setIsLogging(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="admin-login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">
              <FaShieldAlt />
            </div>
            <h2>Admin Login</h2>
            <p>Enter your credentials to access the admin dashboard</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="userID">
                <FaUser className="input-icon" />
                User ID
              </label>
              <input
                type="text"
                id="userID"
                name="userID"
                value={loginData.userID}
                onChange={handleInputChange}
                placeholder="Enter your User ID"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <FaLock className="input-icon" />
                Password
              </label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="error-message">
                {loginError}
              </div>
            )}

            <button 
              type="submit" 
              className="login-btn"
              disabled={isLogging}
            >
              {isLogging ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="demo-credentials">
            <h4>Demo Credentials:</h4>
            <p><strong>User ID:</strong> admin2024</p>
            <p><strong>Password:</strong> admin123</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;