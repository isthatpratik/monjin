"use client"

import { Headphones, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text).then(
    () => {
      alert('Phone number copied to clipboard');
    },
    (err) => {
      console.error('Could not copy text: ', err);
    }
  );
};

export function EnquiryCards() {
  return (
    <div className="grid lg:gap-12 md:grid-cols-2 max-w-screen-2xl mx-auto pt-12">
      {/* Support Enquiries Card */}
      <Card className="relative overflow-hidden border-none shadow-lg backdrop-blur-3xl lg:bg-[#FFFFFF]/40 rounded-2xl lg:rounded-[40px]">
        <div className="absolute inset-0" />
        <CardContent className="relative p-12 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#5C3FFC]/40 rounded-lg">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl lg:text-[28px] font-onest font-semibold">Support Enquiries</CardTitle>
          </div>
          <p className="text-gray-600 text-base font-figtree leading-relaxed">
            Need assistance with Monjin&apos;s platform or services? Our support team is ready to resolve your queries
            quickly and efficiently. Reach out to us anytime—support is just a click away!
          </p>
          <Button
            variant="default"
            className="bg-black text-white hover:bg-gray-800 p-5"
            onClick={() => {
              if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
                window.location.href = 'tel:+91 8855048757';
              } else {
                copyToClipboard('+91 88550 48757');
              }
            }}
          >
            <Phone className="mr-2 h-4 w-4" />
            Contact Support
          </Button>
        </CardContent>
      </Card>

      {/* Sales Enquiries Card */}
      <Card className="relative overflow-hidden border-none shadow-lg backdrop-blur-3xl lg:bg-[#FFFFFF]/40 rounded-2xl lg:rounded-[40px]">
        <div className="absolute inset-0 " />
        <CardContent className="relative p-12 space-y-4">
          <div className="flex items-center gap-3">
          <div className="p-2 bg-[#FF272B]/30 rounded-lg">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-xl lg:text-[28px] font-onest font-semibold">Sales Enquiries</CardTitle>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            Have questions about how Monjin can transform your hiring process? Our sales team is here to guide you!
            Contact us today and take the first step toward smarter recruitment.
          </p>
          <Button
            variant="default"
            className="bg-black text-white hover:bg-gray-800 p-5"
            onClick={() => {
              window.location.href = 'mailto:info@monjin.com';
            }}
          >
            <Mail className="mr-2 h-4 w-4" />
            Write us a mail
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

