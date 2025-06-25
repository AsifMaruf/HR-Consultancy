import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HRConsultancyHome() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-10 space-y-20 font-sans">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-amber-400 tracking-tight">Mawtif HR Consultancy</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Expert Solutions in Recruitment, HR Operations, and Policy Design. Empowering your organization with compliant and scalable HR practices.
        </p>
        <Button className="mt-6 bg-amber-500 hover:bg-amber-600 text-white text-md px-6 py-2 rounded-xl">Get Started</Button>
      </section>
      <section>
        <h2 className="text-3xl font-bold text-center text-amber-300 mb-12">Our Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border border-gray-700 shadow-xl">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-amber-400">Recruitment Solutions</h3>
              <p className="text-gray-300">
                End-to-end hiring support — from job descriptions to onboarding. Tailored for startups, SMEs, and enterprises.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border border-gray-700 shadow-xl">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-amber-400">HR Operations Setup</h3>
              <p className="text-gray-300">
                Build efficient systems for leave, payroll, compliance, and documentation with global best practices.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border border-gray-700 shadow-xl">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-amber-400">Policy & Compliance</h3>
              <p className="text-gray-300">
                Custom HR policies aligned with Bangladesh Labor Law, BSEC, DSE standards and your unique organization culture.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-amber-300">Ready to Elevate Your HR?</h2>
        <p className="text-gray-300">
          Let’s build compliant, efficient, and scalable HR systems together. Reach out now.
        </p>
        <Button className="bg-amber-500 hover:bg-amber-600 text-white text-md px-6 py-2 rounded-xl">Contact Us</Button>
      </section>
    </main>
  );
}