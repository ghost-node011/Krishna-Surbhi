import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { Mail, Phone, Scale, FileText } from 'lucide-react';
import { PHOTOS } from '../../data';

export default function Terms() {
  return (
    <div className="bg-cream min-h-screen">
      <PageHero
        label="Legal"
        title="Terms & Conditions"
        subtitle="The terms and guidelines governing your access and use of krishnasurabhi.org."
        image={PHOTOS.shedHug.src}
        imagePosition={PHOTOS.shedHug.position}
      />

      <section className="py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl border border-forest-dark/8">
              
              <div className="border-b border-forest-dark/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <SectionLabel text="Terms of Use" />
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-forest-dark mt-2">
                    Terms &amp; Conditions
                  </h2>
                </div>
                <div className="text-xs font-bold tracking-wider uppercase text-gold bg-gold/10 px-4 py-2 rounded-full w-fit">
                  Last updated: 25 September 2026
                </div>
              </div>

              <div className="space-y-8 text-forest-dark leading-relaxed font-medium">
                <p className="text-base sm:text-lg text-forest-dark/90 leading-relaxed">
                  By accessing krishnasurabhi.org, you agree to the following terms.
                </p>

                {/* Use of Website */}
                <div className="bg-sand/40 rounded-2xl p-6 sm:p-7 border border-forest-dark/6">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-4 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />
                    Use of Website
                  </h3>
                  <ul className="space-y-2.5 text-forest-dark/90 pl-5 list-disc marker:text-gold">
                    <li>This website is for informational purposes about Krishna Surabhi Gau Seva Sadan.</li>
                    <li>You agree not to misuse, hack, or disrupt the website in any way.</li>
                  </ul>
                </div>

                {/* Content Ownership */}
                <div className="bg-sand/40 rounded-2xl p-6 sm:p-7 border border-forest-dark/6">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-4 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />
                    Content Ownership
                  </h3>
                  <ul className="space-y-2.5 text-forest-dark/90 pl-5 list-disc marker:text-gold">
                    <li>All photos, logos, text, and content on this website belong to Krishna Surabhi Gau Seva Sadan.</li>
                    <li>You may not copy, reproduce, or reuse them without written permission.</li>
                  </ul>
                </div>

                {/* No Online Payments (Currently) */}
                <div className="bg-sand/40 rounded-2xl p-6 sm:p-7 border border-forest-dark/6">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-4 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />
                    No Online Payments (Currently)
                  </h3>
                  <ul className="space-y-2.5 text-forest-dark/90 pl-5 list-disc marker:text-gold">
                    <li>This website does not accept online donations or payments at this time.</li>
                    <li>Any future payment feature will be governed by its own Refund &amp; Cancellation Policy.</li>
                  </ul>
                </div>

                {/* Jurisdiction */}
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-2">
                    Jurisdiction
                  </h3>
                  <p className="text-forest-dark/90">
                    Any dispute arising from the use of this website will be subject to the courts of Sitapur, Rajasthan, India.
                  </p>
                </div>

                {/* Contact */}
                <div className="bg-forest-dark text-white rounded-2xl p-6 sm:p-8 mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-gold/20 flex items-center justify-center text-gold-light">
                      <Scale size={19} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-white">Contact</h3>
                      <p className="text-xs text-gold-light uppercase tracking-wider font-bold">Inquiries &amp; Legal Notices</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm pt-2 border-t border-white/10">
                    <div>
                      <span className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Email</span>
                      <a href="mailto:info@krishnasurabhi.org" className="font-bold text-gold-light hover:underline flex items-center gap-1.5">
                        <Mail size={14} /> info@krishnasurabhi.org
                      </a>
                    </div>
                    <div>
                      <span className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Phone</span>
                      <a href="tel:+919315701187" className="font-bold text-gold-light hover:underline flex items-center gap-1.5">
                        <Phone size={14} /> +91 93157 01187
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
