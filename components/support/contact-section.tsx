import { Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <div className="w-full px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="font-medium text-[48px] leading-[130%] tracking-[-0.06em] mb-4 font-onest">
            You Still have a Question?
          </h2>
          <p className="text-lg leading-[22px] text-gray-600 font-figtree max-w-2xl mx-auto">
            If you cannot find answer to your question in our FAQ&apos;s you can always contact us. we will Answer you
            shortly.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Contact Card */}
          <div className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#E5FFCF]">
                <Phone className="w-6 h-6 text-[#7FB93E]" />
              </div>
              <div>
                <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm mb-2">CONTACT</span>
                <h3 className="text-2xl font-medium">+91- 120 1234 4578</h3>
              </div>
            </div>
            <p className="text-gray-600">If you have experience assessing mid to senior management talent and</p>
          </div>

          {/* Mail Card */}
          <div className="bg-white rounded-2xl p-10 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#E8E5FF]">
                <Mail className="w-6 h-6 text-[#7B6EF6]" />
              </div>
              <div>
                <span className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm mb-2">MAIL</span>
                <h3 className="text-2xl font-medium">support.monjin@gmail.com</h3>
              </div>
            </div>
            <p className="text-gray-600">Become a Leadership Interviewing Expert with Monjin and leverage your</p>
          </div>

        </div>
      </div>
    </div>
  )
}