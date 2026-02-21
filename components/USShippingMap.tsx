'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const LICENSED_STATES = new Set(['MT', 'OR', 'ID', 'UT', 'WY', 'CO', 'AZ', 'OH', 'IA', 'WV', 'KY', 'PA']);
const PENDING_STATES = new Set(['WA', 'NV', 'CA', 'MN', 'MS', 'FL', 'NM']);

// FIPS code to state abbreviation mapping
const FIPS_TO_ABBR: Record<string, string> = {
  '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA', '08': 'CO',
  '09': 'CT', '10': 'DE', '12': 'FL', '13': 'GA', '15': 'HI', '16': 'ID',
  '17': 'IL', '18': 'IN', '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA',
  '23': 'ME', '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS',
  '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH', '34': 'NJ',
  '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND', '39': 'OH', '40': 'OK',
  '41': 'OR', '42': 'PA', '44': 'RI', '45': 'SC', '46': 'SD', '47': 'TN',
  '48': 'TX', '49': 'UT', '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV',
  '55': 'WI', '56': 'WY',
};

const STATE_NAMES: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', FL: 'Florida', GA: 'Georgia',
  HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana', IA: 'Iowa',
  KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine', MD: 'Maryland',
  MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi', MO: 'Missouri',
  MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire', NJ: 'New Jersey',
  NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota', OH: 'Ohio',
  OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island', SC: 'South Carolina',
  SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah', VT: 'Vermont',
  VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin', WY: 'Wyoming',
};

interface TooltipState {
  name: string;
  abbr: string;
  x: number;
  y: number;
}

export default function USShippingMap() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  function getFill(abbr: string) {
    if (LICENSED_STATES.has(abbr)) return '#2D5F4F';
    if (PENDING_STATES.has(abbr)) return '#D97706';
    return '#D1D5DB';
  }

  function getStroke(abbr: string) {
    if (LICENSED_STATES.has(abbr)) return '#1E4038';
    if (PENDING_STATES.has(abbr)) return '#B45309';
    return '#9CA3AF';
  }

  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoAlbersUsa"
        className="w-full"
        style={{ height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const fips = geo.id?.toString().padStart(2, '0') ?? '';
              const abbr = FIPS_TO_ABBR[fips] ?? '';
              const fill = getFill(abbr);
              const stroke = getStroke(abbr);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke={stroke}
                  strokeWidth={0.8}
                  style={{
                    default: { outline: 'none', cursor: 'pointer', opacity: LICENSED_STATES.has(abbr) ? 1 : PENDING_STATES.has(abbr) ? 0.9 : 0.6 },
                    hover: { outline: 'none', filter: 'brightness(1.15)', cursor: 'pointer' },
                    pressed: { outline: 'none' },
                  }}
                  onMouseEnter={(e) => {
                    const rect = (e.target as SVGElement).closest('svg')?.getBoundingClientRect();
                    if (rect && abbr) {
                      setTooltip({
                        name: STATE_NAMES[abbr] ?? abbr,
                        abbr,
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                      });
                    }
                  }}
                  onMouseLeave={() => setTooltip(null)}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      {tooltip && (
        <div
          className="absolute pointer-events-none z-20 bg-neutral-dark text-white text-[13px] font-sans rounded-lg px-3 py-2 shadow-xl"
          style={{ left: tooltip.x + 12, top: tooltip.y - 36 }}
        >
          <span className="font-semibold">{tooltip.name}</span>
          <span className="ml-2 opacity-70 text-[12px]">
            {LICENSED_STATES.has(tooltip.abbr)
              ? '· Currently Shipping'
              : PENDING_STATES.has(tooltip.abbr)
              ? '· Coming Soon'
              : '· Not Yet Available'}
          </span>
        </div>
      )}
    </div>
  );
}
