const navigation = {
    product: [
      { name: 'Pricing', href: '#' },
      { name: 'Overview', href: '#' },
      { name: 'Browse', href: '#' },
      { name: 'Accessibility', href: '#' },
      { name: 'Five', href: '#' },
    ],
    solutions: [
      { name: 'Brainstorming', href: '#' },
      { name: 'Ideation', href: '#' },
      { name: 'Wireframing', href: '#' },
      { name: 'Research', href: '#' },
      { name: 'Design', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'Developers', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Reports', href: '#' },
    ],
    social: [
      { name: 'YouTube', href: '#', icon: '/youtube.png' },
      { name: 'Facebook', href: '#', icon: '/facebook.png' },
      { name: 'Twitter', href: '#', icon: '/twitter.png' },
      { name: 'Instagram', href: '#', icon: '/instagram.png' },
      { name: 'LinkedIn', href: '#', icon: '/link.png' },
    ],
  };
  
  export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl flex flex-col items-center sm:items-stretch mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            {/* Left columns */}
            <div className="flex flex-wrap w-full text-center items-center lg:flex-nowrap">
              <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
  
              <div className="w-full lg:w-1/3">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-gray-300 h-4 w-4 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            {/* Right columns */}
            <div className="flex flex-col lg:ml-10 items-center text-center sm:text-start sm:items-start">
              <h3 className="text-sm font-semibold leading-6 text-white">Get the App</h3>
              <div className="flex flex-col items-center sm:items-start gap-3 mt-4">
                <a href="#">
                  <img src="/app_store.png" alt="App Store" className="h-8" />
                </a>
                <a href="#">
                  <img src="/play_store.png" alt="Google Play" className="h-8" />
                </a>
              </div>
  
              <div className="mt-8">
                <h3 className="text-sm font-semibold leading-6 text-white">Follow Us</h3>
                <div className="flex space-x-6 mt-4">
                  {navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-white">
                      <img src={item.icon} alt={item.name} className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
  
          {/* Footer bottom */}
          <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <p className="text-base text-gray-400">
                &copy; 2023 Collers. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 lg:mt-0 text-gray-400">
                <a href="#" className="hover:text-white">Terms</a>
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white">Contact</a>
                <a href="#" className="hover:text-white flex items-center">
                  <img src="/world.png" alt="language" className="h-4 w-4 mr-1" />
                  EN
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  