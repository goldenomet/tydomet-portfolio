import { Heart } from 'lucide-react';

export default function DonationBox() {
  return (
    <div className="wonka-card p-8 rounded-2xl text-center">
      <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4 animate-float" />
      <h3 className="text-2xl font-bold mb-4 gradient-text">Support My Journey</h3>
      <p className="text-gray-700 mb-6">
        Your support helps me continue my education at IBM and pursue my dreams in software engineering.
        Every contribution makes a difference!
      </p>
      <a
        href="https://flutterwave.com/donate/fb93m1ohppej"
        target="_blank"
        rel="noopener noreferrer"
        className="wonka-button px-8 py-3 rounded-full text-white font-semibold inline-flex items-center"
      >
        <Heart className="h-5 w-5 mr-2" />
        Support My Education
      </a>
    </div>
  );
}