import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import BackToTop from './components/BackToTop/BackToTop';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Academic from './pages/Academic/Academic';
import Admissions from './pages/Admissions/Admissions';
import FeePayment from './pages/FeePayment/FeePayment';
import Gallery from './pages/Gallery/Gallery';

// Student Pages
import StudentAttendance from './pages/Student/StudentAttendance';
import OnlineClasses from './pages/Student/OnlineClasses';
import StudentDashboard from './pages/Student/StudentDashboard';
import StudentCourses from './pages/Student/StudentCourses';
import StudentGrades from './pages/Student/StudentGrades';

// Admin Pages
import AdminDashboard from './pages/Admin/AdminDashboard';
import ManageStudents from './pages/Admin/ManageStudents';

// Faculty Pages
import FacultyDashboard from './pages/Faculty/FacultyDashboard';
import FacultyAttendance from './pages/Faculty/FacultyAttendance';
import FacultyGrades from './pages/Faculty/FacultyGrades';
import FacultyCourses from './pages/Faculty/FacultyCourses';
import FacultyProfile from './pages/Faculty/FacultyProfile';

// Admin Pages (additional)
import ManageFaculty from './pages/Admin/ManageFaculty';
import ManageCourses from './pages/Admin/ManageCourses';
import AdminSettings from './pages/Admin/AdminSettings';

// Student Pages (additional)
import StudentAssignments from './pages/Student/StudentAssignments';
import StudentProfile from './pages/Student/StudentProfile';

// Login Pages
import AdminLogin from './pages/Admin/AdminLogin';
import FacultyLogin from './pages/Faculty/FacultyLogin';
import StudentLogin from './pages/Student/StudentLogin';

import './App.css';




function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/fee-payment" element={<FeePayment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/student-login" element={<StudentLogin />} />
        
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-students" element={<ManageStudents />} />
        <Route path="/admin/manage-faculty" element={<ManageFaculty />} />
        <Route path="/admin/manage-courses" element={<ManageCourses />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        
        {/* Faculty Routes */}
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        <Route path="/faculty/attendance" element={<FacultyAttendance />} />
        <Route path="/faculty/grades" element={<FacultyGrades />} />
        <Route path="/faculty/courses" element={<FacultyCourses />} />
        <Route path="/faculty/profile" element={<FacultyProfile />} />
        
        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/courses" element={<StudentCourses />} />
        <Route path="/student/grades" element={<StudentGrades />} />
        <Route path="/student/assignments" element={<StudentAssignments />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/online-classes" element={<OnlineClasses />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        </Routes>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;