import PageHero from '../../components/PageHero';
import FadeIn from '../../components/FadeIn';
import SectionLabel from '../../components/SectionLabel';
import { Mail, Phone, ShieldCheck, UserCheck } from 'lucide-react';
import { PHOTOS } from '../../data';

export default function PrivacyPolicy() {
  return (
    <div className="bg-cream min-h-screen">
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="How we protect and handle your personal data under the Digital Personal Data Protection Act, 2023 (India)."
        image={PHOTOS.yardCalm.src}
        imagePosition={PHOTOS.yardCalm.position}
      />

      <section className="py-12 md:py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl border border-forest-dark/8">
              
              <div className="border-b border-forest-dark/10 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <SectionLabel text="Digital Personal Data Protection" />
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-forest-dark mt-2">
                    Privacy Policy
                  </h2>
                </div>
                <div className="text-xs font-bold tracking-wider uppercase text-gold bg-gold/10 px-4 py-2 rounded-full w-fit">
                  Last updated: 25 September 2026
                </div>
              </div>

              <div className="space-y-8 text-forest-dark leading-relaxed font-medium">
                <p className="text-base sm:text-lg text-forest-dark/90 leading-relaxed">
                  Krishna Surabhi Gau Seva Sadan (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;the Trust&rdquo;) respects your privacy. This policy explains what data we collect, why we collect it, and how we protect it under the Digital Personal Data Protection Act, 2023 (India).
                </p>

                {/* Data We Collect */}
                <div className="bg-sand/40 rounded-2xl p-6 sm:p-7 border border-forest-dark/6">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-4 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />
                    Data We Collect
                  </h3>
                  <ul className="space-y-2.5 text-forest-dark/90 pl-5 list-disc marker:text-gold">
                    <li>Name, email, phone number, and address (from contact and volunteer forms)</li>
                    <li>Any message or details you voluntarily submit through the website</li>
                  </ul>
                </div>

                {/* Why We Collect It */}
                <div className="bg-sand/40 rounded-2xl p-6 sm:p-7 border border-forest-dark/6">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-4 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />
                    Why We Collect It
                  </h3>
                  <ul className="space-y-2.5 text-forest-dark/90 pl-5 list-disc marker:text-gold">
                    <li>To respond to your queries and messages</li>
                    <li>To coordinate volunteering and seva activities</li>
                    <li>To send updates about our rescued cows and sanctuary</li>
                  </ul>
                </div>

                {/* Data Sharing */}
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-2">
                    Data Sharing
                  </h3>
                  <p className="text-forest-dark/90">
                    We do not sell, rent, or trade your personal data. We share it only with government authorities if legally required.
                  </p>
                </div>

                {/* Data Retention */}
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-2">
                    Data Retention
                  </h3>
                  <p className="text-forest-dark/90">
                    We retain your data only as long as needed to respond to you or as required by applicable law.
                  </p>
                </div>

                {/* Your Rights */}
                <div>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-2">
                    Your Rights
                  </h3>
                  <p className="text-forest-dark/90">
                    You may request access, correction, or deletion of your personal data by emailing{' '}
                    <a href="mailto:info@krishnasurabhi.org" className="text-gold font-bold hover:underline">
                      info@krishnasurabhi.org
                    </a>.
                  </p>
                </div>

                {/* Grievance Officer */}
                <div className="bg-forest-dark text-white rounded-2xl p-6 sm:p-8 mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-gold/20 flex items-center justify-center text-gold-light">
                      <UserCheck size={19} />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl text-white">Grievance Officer</h3>
                      <p className="text-xs text-gold-light uppercase tracking-wider font-bold">Contact Person</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4 text-sm pt-2 border-t border-white/10">
                    <div>
                      <span className="block text-white/60 text-xs font-bold uppercase tracking-wider mb-1">Name</span>
                      <span className="font-bold text-white">Rakhi</span>
                    </div>
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

                {/* Consent */}
                <div className="pt-4 border-t border-forest-dark/10">
                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-forest-dark mb-2">
                    Consent
                  </h3>
                  <p className="text-forest-dark/90">
                    By using this website, you consent to this Privacy Policy.
                  </p>
                </div>

              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
