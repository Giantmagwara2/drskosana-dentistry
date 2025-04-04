import Hero from '@/components/Hero';

export default function GalleryPage() {
  // Define gallery items as an array for dynamic rendering
  const galleryItems = [
    {
      src: '/images/gallery/image1.jpg', // Replace with actual image paths in /public/images/gallery/
      alt: 'Patient Smile 1',
      caption: 'Smile Transformation 1',
    },
    {
      src: '/images/gallery/image2.jpg', // Replace with actual image paths in /public/images/gallery/
      alt: 'Patient Smile 2',
      caption: 'Smile Transformation 2',
    },
    {
      src: '/images/gallery/image3.jpg', // Replace with actual image paths in /public/images/gallery/
      alt: 'Patient Smile 3',
      caption: 'Smile Transformation 3',
    },
    {
      src: '/images/gallery/image4.jpg', // Replace with actual image paths in /public/images/gallery/
      alt: 'Patient Smile 4',
      caption: 'Smile Transformation 4',
    },
    {
      src: '/images/gallery/image5.jpg', // Replace with actual image paths in /public/images/gallery/
      alt: 'Patient Smile 5',
      caption: 'Smile Transformation 5',
    },
    {
      src: '/images/gallery/image6.jpg', // Replace with actual image paths in /public/images/gallery/
      alt: 'Patient Smile 6',
      caption: 'Smile Transformation 6',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">Smile Gallery</h1>
        <p className="text-lg text-gray-600 mb-8">
          Browse through our gallery to see the transformations and results achieved by Dr. P.I Skosana.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item group">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <p className="text-center text-gray-600 mt-2">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}