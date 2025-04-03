'use client';

interface LogoProps {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export default function Logo({ variant = 'dark', showTagline = true }: LogoProps) {
  const primaryColor = variant === 'dark' ? '#144a8c' : '#ffffff';
  const secondaryColor = variant === 'dark' ? '#9a5b4f' : '#55b7df';
  const taglineColor = variant === 'dark' ? '#555555' : '#f0f2f4';

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        {/* Tooth Icon */}
        <div className="mr-2">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4.5C13.55 4.5 15.1 4.95 16.5 5.72C17.35 6.2 18.29 5.61 18.29 4.65C18.29 4.12 18 3.63 17.5 3.36C15.87 2.48 13.93 2 12 2C10.06 2 8.13 2.48 6.5 3.36C6 3.63 5.71 4.12 5.71 4.65C5.71 5.61 6.65 6.2 7.5 5.72C8.9 4.95 10.45 4.5 12 4.5Z"
              fill={primaryColor}
            />
            <path
              d="M15.3799 7.79995C14.3799 7.34995 13.1899 7.09995 11.9999 7.09995C10.6099 7.09995 9.28989 7.39995 8.10989 7.94995C7.68989 8.14995 7.55989 8.59995 7.44989 8.99995C7.19989 9.84995 6.94989 10.89 6.94989 12.19C6.94989 12.94 7.00989 13.59 7.10989 14.19C7.16989 14.49 7.23989 14.79 7.31989 15.09C7.36989 15.29 7.42989 15.49 7.48989 15.69C7.49989 15.69 7.49989 15.69 7.49989 15.69C7.84989 16.69 8.39989 17.49 9.19989 17.99C10.4999 18.79 12.0999 20.29 13.4799 21.8C13.7399 22.08 14.1699 22.07 14.4099 21.77L14.4999 21.67C15.7799 20.17 17.3199 18.74 18.5899 17.99C19.3999 17.5 19.9499 16.7 20.2999 15.69C20.3599 15.49 20.4199 15.29 20.4699 15.09C20.5499 14.79 20.6199 14.49 20.6799 14.19C20.7799 13.59 20.8399 12.94 20.8399 12.19C20.8399 11.09 20.6499 10.09 20.4499 9.18995C20.2499 8.28995 19.4399 7.69995 18.4799 7.92995C17.4099 8.19995 16.3799 7.79995 15.3799 7.79995Z"
              fill={secondaryColor}
            />
          </svg>
        </div>

        {/* Practice Name */}
        <div>
          <div className="flex flex-col">
            <span className="text-xl font-playfair font-bold" style={{ color: primaryColor }}>
              Dr. P. Skhosana
            </span>
            {showTagline && (
              <span
                className="text-xs font-montserrat"
                style={{ color: taglineColor }}
              >
                Dental Excellence
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
