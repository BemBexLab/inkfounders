import React from 'react';

const GetInTouch = () => {
  return (
    <div className="bg-white flex justify-center py-8 px-6 lg:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Section */}
          <div className="flex-1 max-w-[500px]">
            <h2 className="text-[#d4d946] text-[22px] font-semibold mb-2">
              Have Questions? Need Guidance?
            </h2>
            <h3 className="text-[#1a1a1a] text-[32px] font-semibold mb-8">
              Let's Talk
            </h3>

            <div className="space-y-5 text-[14px] text-[#333333] leading-relaxed mb-12">
              <p>
                Ready to begin your self-publishing journey but still have questions? Looking for expert advice to bring your vision to life? Ink Founder is here to help.
              </p>
              <p>
                We offer a free consultation where you can share your book concept, explore our services in detail, and discover how we can support you in turning your manuscript into a published masterpiece. Reach out today—we're ready when you are.
              </p>
            </div>

            {/* Contact Options */}
            <div className="flex flex-wrap gap-8">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#d4d946] rounded-md flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M20.2282 21.2883C18.1249 21.2883 16.0467 20.8299 13.9938 19.9132C11.941 18.9965 10.0732 17.6964 8.39048 16.0131C6.70778 14.3297 5.40807 12.4619 4.49134 10.4097C3.57461 8.35749 3.11591 6.27937 3.11523 4.17533C3.11523 3.87245 3.2162 3.62004 3.41812 3.41812C3.62004 3.2162 3.87245 3.11523 4.17533 3.11523H8.26427C8.49985 3.11523 8.71019 3.19533 8.89528 3.35552C9.08038 3.51572 9.18975 3.70485 9.22341 3.92293L9.87966 7.45658C9.91331 7.72581 9.9049 7.95297 9.85442 8.13807C9.80394 8.32317 9.71139 8.48302 9.57677 8.61764L7.12846 11.0912C7.46499 11.7138 7.86447 12.3152 8.32687 12.8954C8.78927 13.4756 9.29846 14.0352 9.85442 14.5744C10.3761 15.096 10.9229 15.5799 11.495 16.0262C12.0672 16.4724 12.6729 16.8803 13.3124 17.2499L15.6849 14.8773C15.8364 14.7258 16.0343 14.6124 16.2786 14.537C16.5229 14.4616 16.7625 14.4404 16.9974 14.4734L20.4806 15.1801C20.7162 15.2474 20.9097 15.3696 21.0611 15.5466C21.2126 15.7236 21.2883 15.9212 21.2883 16.1393V20.2282C21.2883 20.5311 21.1874 20.7835 20.9854 20.9854C20.7835 21.1874 20.5311 21.2883 20.2282 21.2883Z" fill="white"/>
</svg>
                </div>
                <span className="text-[14px] text-[#333333]">Enter your phone number</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#d4d946] rounded-md flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M20.1926 4.03809H4.03876C2.92818 4.03809 2.02963 4.94674 2.02963 6.05732L2.01953 18.1727C2.01953 19.2833 2.92818 20.1919 4.03876 20.1919H20.1926C21.3032 20.1919 22.2118 19.2833 22.2118 18.1727V6.05732C22.2118 4.94674 21.3032 4.03809 20.1926 4.03809ZM20.1926 8.07655L12.1157 13.1246L4.03876 8.07655V6.05732L12.1157 11.1054L20.1926 6.05732V8.07655Z" fill="white"/>
</svg>
                </div>
                <span className="text-[14px] text-[#333333]">Enter your email address</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#d4d946] rounded-md flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M12.1152 11.6109C11.4457 11.6109 10.8037 11.345 10.3304 10.8716C9.85705 10.3983 9.59112 9.75626 9.59112 9.08684C9.59112 8.41742 9.85705 7.77542 10.3304 7.30207C10.8037 6.82872 11.4457 6.5628 12.1152 6.5628C12.7846 6.5628 13.4266 6.82872 13.8999 7.30207C14.3733 7.77542 14.6392 8.41742 14.6392 9.08684C14.6392 9.4183 14.5739 9.74652 14.4471 10.0527C14.3202 10.359 14.1343 10.6372 13.8999 10.8716C13.6655 11.106 13.3873 11.2919 13.0811 11.4187C12.7748 11.5456 12.4466 11.6109 12.1152 11.6109ZM12.1152 2.01953C10.2408 2.01953 8.44319 2.76412 7.11782 4.0895C5.79244 5.41487 5.04785 7.21247 5.04785 9.08684C5.04785 14.3873 12.1152 22.2118 12.1152 22.2118C12.1152 22.2118 19.1825 14.3873 19.1825 9.08684C19.1825 7.21247 18.4379 5.41487 17.1125 4.0895C15.7871 2.76412 13.9895 2.01953 12.1152 2.01953Z" fill="white"/>
</svg>
                </div>
                <span className="text-[14px] text-[#333333]">Place your address here</span>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="flex-1 max-w-[550px] bg-[#F4F3E1] rounded-lg p-8">
            <h3 className="text-[#1a1a1a] text-[26px] font-semibold mb-8">
              Get In Touch Now!
            </h3>

            <form className="space-y-4">
              {/* First Name & Last Name */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="flex-1 bg-[#EDECDA] border-0 rounded-md px-4 py-3 text-[14px] text-[#9D9F9D] placeholder-[#999999] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="flex-1 bg-[#EDECDA] border-0 rounded-md px-4 py-3 text-[14px] text-[#9D9F9D] placeholder-[#999999] focus:outline-none"
                />
              </div>

              {/* Email & Phone */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-[#EDECDA] border-0 rounded-md px-4 py-3 text-[14px] text-[#9D9F9D] placeholder-[#999999] focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="flex-1 bg-[#EDECDA] border-0 rounded-md px-4 py-3 text-[14px] text-[#9D9F9D] placeholder-[#999999] focus:outline-none"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full bg-[#EDECDA] border-0 rounded-md px-4 py-3 text-[14px] text-[#9D9F9D] placeholder-[#999999] focus:outline-none resize-none"
              />

              {/* Checkbox */}
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-[#d4d946] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#1a1a1a] text-[12px] font-bold">✓</span>
                </div>
                <label className="text-[12px] text-[#9D9F9D] leading-relaxed">
                  Please check the box to communicate via SMS or Email (Terms & Conditions & Privacy Policy) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#d4d946] text-[#1a1a1a] text-[14px] font-regular px-7 py-3 rounded-md hover:bg-[#c5ca3e] transition-colors"
              >
                Let's Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;