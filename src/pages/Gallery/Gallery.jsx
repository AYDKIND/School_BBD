import React, { useState } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
      title: 'Modern Campus Building',
      category: 'Campus',
      description: 'Our state-of-the-art main academic building with modern architecture and facilities.'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
      title: 'Science Laboratory',
      category: 'Facilities',
      description: 'Well-equipped science laboratory for hands-on learning and experiments.'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Interactive Classroom',
      category: 'Academics',
      description: 'Modern classroom with smart boards and interactive learning technology.'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80',
      title: 'Library & Study Area',
      category: 'Facilities',
      description: 'Spacious library with extensive collection of books and quiet study areas.'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/8941650/pexels-photo-8941650.jpeg',
      title: 'Sports Complex',
      category: 'Sports',
      description: 'Multi-purpose sports complex for various indoor and outdoor activities.'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
      title: 'Computer Lab',
      category: 'Technology',
      description: 'Advanced computer laboratory with latest technology and high-speed internet.'
    },
    {
      id: 7,
      src: 'https://media.istockphoto.com/id/664198918/photo/mixed-race-group-of-students-using-virtual-reality-goggles.jpg?s=1024x1024&w=is&k=20&c=oPd28iQ6doPV4lBNH9BKXituMt10ASz8RLNYTYx41Dc=',
      title: 'Student Activities',
      category: 'Events',
      description: 'Students engaged in various co-curricular and extracurricular activities.'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/34384052/pexels-photo-34384052.jpeg',
      title: 'Convocation Ceremony',
      category: 'Events',
      description: 'Annual Convocation ceremony celebrating student achievements.'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      title: 'Faculty Meeting',
      category: 'Faculty',
      description: 'Our dedicated faculty members collaborating for academic excellence.'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/33990152/pexels-photo-33990152.jpeg?_gl=1*1whlkao*_ga*MTI0NjUyNTk5Ny4xNzYxMDI1MTEy*_ga_8JE65Q40S6*czE3NjEzNjYxNjQkbzEwJGcxJHQxNzYxMzY2NzM4JGoxNSRsMCRoMA..',
      title: 'Campus Garden',
      category: 'Campus',
      description: 'Beautiful landscaped gardens providing a serene learning environment.'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/7692893/pexels-photo-7692893.jpeg?_gl=1*mohej0*_ga*MTI0NjUyNTk5Ny4xNzYxMDI1MTEy*_ga_8JE65Q40S6*czE3NjEzNjYxNjQkbzEwJGcxJHQxNzYxMzY2ODQ0JGozNiRsMCRoMA..',
      title: 'Art & Craft Room',
      category: 'Facilities',
      description: 'Creative space for art, craft, and design activities.'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg?_gl=1*3e65s3*_ga*MTI0NjUyNTk5Ny4xNzYxMDI1MTEy*_ga_8JE65Q40S6*czE3NjEzNjYxNjQkbzEwJGcxJHQxNzYxMzY2ODg2JGo2MCRsMCRoMA..',
      title: 'Auditorium',
      category: 'Facilities',
      description: 'Modern auditorium for assemblies, performances, and special events.'
    }
  ];

  const categories = ['All', 'Campus', 'Facilities', 'Academics', 'Sports', 'Technology', 'Events', 'Faculty'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>School Gallery</h1>
            <p>Explore our vibrant campus life, modern facilities, and memorable moments</p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div key={image.id} className="gallery-item" onClick={() => openModal(image, index)}>
                <div className="image-container">
                  <img src={image.src} alt={image.title} loading="lazy" />
                  <div className="image-overlay">
                    <div className="image-info">
                      <h3>{image.title}</h3>
                      <p>{image.category}</p>
                    </div>
                    <div className="expand-icon">
                      <FaExpand />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <button className="modal-nav prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            <button className="modal-nav next" onClick={nextImage}>
              <FaChevronRight />
            </button>
            <div className="modal-image">
              <img src={selectedImage.src} alt={selectedImage.title} />
            </div>
            <div className="modal-info">
              <h3>{selectedImage.title}</h3>
              <p className="modal-category">{selectedImage.category}</p>
              <p className="modal-description">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;