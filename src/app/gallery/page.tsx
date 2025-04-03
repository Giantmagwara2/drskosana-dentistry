import Hero from '@/components/Hero';

export default function GalleryPage() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-brand-primary mb-8">Smile Gallery</h1>
        <p className="text-lg text-gray-600 mb-8">
          Browse through our gallery to see the transformations and results achieved by Dr. P. Skosana.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Gallery Item 1 */}
          <div className="gallery-item">
            <img src="/path/to/image1.jpg" alt="Patient Smile 1" className="w-full h-auto mb-4" />
            <p className="text-center text-gray-600">Smile Transformation 1</p>
          </div>
          {/* Gallery Item 2 */}
          <div className="gallery-item">
            <img src="/path/to/image2.jpg" alt="Patient Smile 2" className="w-full h-auto mb-4" />
            <p className="text-center text-gray-600">Smile Transformation 2</p>
          </div>
          {/* Gallery Item 3 */}
          <div className="gallery-item">
            <img src="/path/to/image3.jpg" alt="Patient Smile 3" className="w-full h-auto mb-4" />
            <p className="text-center text-gray-600">Smile Transformation 3</p>
          </div>
          {/* Additional gallery items can be added here */}
        </div>
      </div>
    </>
  );
}
