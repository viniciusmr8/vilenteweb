import { Link } from "react-router-dom";
import "./literatura-section.css";

export interface LiteraturaCategoryCard {
  id: string;
  href: string;
  num: string;
  label: string;
  title: string;
  description: string;
  countLabel: string;
  illustration: "books" | "open-book";
}

const BooksIllustration = () => (
  <svg viewBox="0 0 320 190" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(28, 28)">
      <rect x="0" y="22" width="13" height="92" fill="#7A5C3A" rx="1" />
      <rect x="16" y="10" width="15" height="104" fill="#A47E50" rx="1" />
      <rect x="34" y="28" width="11" height="86" fill="#5C4A2E" rx="1" />
      <rect x="48" y="4" width="17" height="110" fill="#C09B6A" rx="1" />
      <rect x="68" y="18" width="12" height="96" fill="#8B6F47" rx="1" />
      <rect x="83" y="0" width="14" height="114" fill="#6B5333" rx="1" />
      <rect x="100" y="22" width="13" height="92" fill="#A47E50" rx="1" />
      <rect x="116" y="12" width="16" height="102" fill="#7A5C3A" rx="1" />
      <rect x="135" y="6" width="12" height="108" fill="#5C4A2E" rx="1" />
      <rect x="150" y="26" width="15" height="88" fill="#B89968" rx="1" />
      <rect x="168" y="14" width="13" height="100" fill="#6B5333" rx="1" />
      <rect x="184" y="0" width="14" height="114" fill="#A47E50" rx="1" />
      <rect x="201" y="20" width="12" height="94" fill="#7A5C3A" rx="1" />
      <rect x="216" y="6" width="16" height="108" fill="#5C4A2E" rx="1" />
      <rect x="235" y="22" width="13" height="92" fill="#8B6F47" rx="1" />
      <rect x="251" y="14" width="12" height="100" fill="#A47E50" rx="1" />
      <rect x="-10" y="116" width="290" height="5" fill="#3D2F1C" rx="1" />
      <rect x="-10" y="121" width="290" height="2" fill="#2A1F12" rx="1" opacity="0.4" />
    </g>
  </svg>
);

const OpenBookIllustration = () => (
  <svg viewBox="0 0 320 190" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(70, 38)">
      <path d="M 0 14 Q 90 0, 180 14 L 180 102 Q 90 88, 0 102 Z" fill="none" stroke="#C7C2B5" strokeWidth="0.8" />
      <path d="M 6 18 Q 90 6, 174 18 L 174 96 Q 90 84, 6 96 Z" fill="none" stroke="#888373" strokeWidth="0.5" opacity="0.5" />
      <line x1="90" y1="6" x2="90" y2="96" stroke="#C7C2B5" strokeWidth="0.8" />
      <line x1="14" y1="30" x2="78" y2="30" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="14" y1="40" x2="80" y2="40" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="14" y1="50" x2="72" y2="50" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="14" y1="60" x2="78" y2="60" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="14" y1="70" x2="64" y2="70" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="14" y1="80" x2="74" y2="80" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="102" y1="30" x2="166" y2="30" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="102" y1="40" x2="168" y2="40" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="102" y1="50" x2="160" y2="50" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="102" y1="60" x2="166" y2="60" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="102" y1="70" x2="152" y2="70" stroke="#6E6A5F" strokeWidth="0.6" />
      <line x1="102" y1="80" x2="162" y2="80" stroke="#6E6A5F" strokeWidth="0.6" />
      <circle cx="90" cy="108" r="1.5" fill="#C7C2B5" />
    </g>
  </svg>
);

interface LiteraturaSectionProps {
  cards: LiteraturaCategoryCard[];
}

export const LiteraturaSection = ({ cards }: LiteraturaSectionProps) => (
  <section className="literatura-section">
    <header className="lit-header">
      <p className="lit-eyebrow">Coleção pessoal</p>
      <h1 className="lit-title">Literatura</h1>
      <p className="lit-sub">
        Um arquivo vivo de textos publicados — entre a ficção que invento e a crítica que pratico.
      </p>
      <div className="lit-rule">
        <span className="ln" />
        <span className="dt" />
        <span className="ln" />
      </div>
    </header>

    <div className="lit-grid">
      {cards.map((card) => (
        <Link key={card.id} to={card.href} className="lit-card">
          <div className={`lit-img ${card.illustration === "books" ? "lit-img-1" : "lit-img-2"}`}>
            {card.illustration === "books" ? <BooksIllustration /> : <OpenBookIllustration />}
          </div>

          <div className="lit-body">
            <p className="lit-cat">
              <span className="lit-num">{card.num}</span>
              <span className="lit-sep" />
              {card.label}
            </p>
            <h2 className="lit-h">{card.title}</h2>
            <p className="lit-desc">{card.description}</p>
            <div className="lit-foot">
              <span className="lit-count">{card.countLabel}</span>
              <span className="lit-link">Explorar acervo</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </section>
);
