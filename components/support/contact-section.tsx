import { Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="font-semibold text-2xl lg:text-5xl leading-[130%] tracking-[-0.06em] mb-4 font-onest">
            You Still have a Question?
          </h2>
          <p className="text-sm lg:text-lg leading-[22px] text-gray-600 font-figtree max-w-2xl mx-auto">
            If you cannot find answer to your question in our FAQ&apos;s you can always contact us. we will Answer you
            shortly.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-7xl mx-auto">
          {/* Contact Card */}
          <div className="bg-white rounded-2xl lg:p-10 p-4">
            <div className="flex items-start gap-4">
              <div className="lg:w-16 lg:h-16 w-12 h-12 flex items-center justify-center rounded-2xl bg-[#E5FFCF] shadow-[0px_22px_24px_rgba(214,222,189,0.45)] flex-shrink-0">
                <Phone className="w-6 h-6 text-[#7FB93E]" />
              </div>
              <div>
                <span className="inline-block px-4 py-1 bg-gray-100 rounded-full font-figtree text-xs lg:text-sm mb-2">CONTACT</span>
                <h3 className="text-sm font-figtree lg:text-2xl font-medium">+91 8855048757</h3>
              </div>
            </div>
          </div>

          {/* Mail Card */}
          <div className="bg-white rounded-2xl lg:p-10 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex items-start gap-4">
              <div className="lg:w-16 lg:h-16 w-12 h-12 flex items-center justify-center rounded-2xl bg-[#E8E5FF] shadow-[0px_22px_24px_rgba(200,189,222,0.45)] flex-shrink-0">
                <Mail className="w-6 h-6 text-[#7B6EF6]" />
              </div>
              <div>
                <span className="inline-block px-4 py-1 bg-gray-100 rounded-full font-figtree text-xs lg:text-sm mb-2">MAIL</span>
                <h3 className="text-sm font-figtree lg:text-2xl font-medium">info@monjin.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}