"use client";

import { Wrench, ArrowLeft, Clock, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@public/logo-nova.png";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center mb-8">
          <Image src={Logo} alt="Logo Moreira" width={400} />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Em Manutenção
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Estamos trabalhando para melhorar sua experiência. Voltaremos em
            breve com novidades!
          </p>

          <div className="pt-6 space-y-4">
            <p className="text-gray-600">
              Enquanto isso, você pode entrar em contato conosco:
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="http://wa.me/5586995898758"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
              >
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          &copy; 2026 Aço Moreira. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
