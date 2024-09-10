import React from 'react';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission (e.g., send data to a server)
    console.log(data);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Google Map Section */}
      <div className="relative h-96 border-4 border-gray-800">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.082101572202!2d67.06789367401184!3d24.861045345236708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f24452b63bd%3A0x6541078cce9d7da4!2sMAJU%20-%20Computing%20and%20Engg.%20Block%20(Block%20D)!5e0!3m2!1sen!2s!4v1711995098727!5m2!1sen!2s"
          className="w-full h-full border-none"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-gray-800" id="contact">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h6 className="text-orange-500 text-lg font-bold">CONTACT</h6>
            {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 relative inline-block">
           Get in Touch
            <span className="block w-16 h-1 bg-orange-500 mt-4 mx-auto rounded"></span>
          </h2>
            <p className="text-gray-300 text-lg">
              Send us a message or contact us via email and our team will be
              ready to assist you with any queries or issues!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {/* Address */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full sm:w-80">
              <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p>NASTP, Main Shahrah-e-Faisal</p>
              <p>Karachi, Sindh</p>
            </div>

            {/* Contact */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full sm:w-80">
              <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact</h3>
              <p>Mobile: +92 344-8302253</p>
              <p>Email: <a href="mailto:eshalmerab1@gmail.com" className="text-orange-500">eshalmerab1@gmail.com</a></p>
            </div>

            {/* Working Hours */}
            <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full sm:w-80">    
              <div className="bg-orange-500 text-white p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p>Monday - Friday: 08:00 - 17:00</p>
              <p>Saturday & Sunday: 08:00 - 12:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-16 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Ready to Get Started?</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full p-3 border border-gray-600 rounded-lg text-black"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full p-3 border border-gray-600 rounded-lg text-black"
                  placeholder="Your email address"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                <input
                  type="text"
                  {...register('subject')}
                  className="w-full p-3 border border-gray-600 rounded-lg text-black"
                  placeholder="Subject (Optional)"
                />
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  className="w-full p-3 border border-gray-600 rounded-lg text-black"
                  rows="5"
                  placeholder="Write your message..."
                />
                {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-600 text-white py-3 px-6 rounded-lg border border-orange-600 hover:bg-transparent hover:border-2 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
