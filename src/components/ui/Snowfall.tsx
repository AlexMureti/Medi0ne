import React, { useMemo } from 'react';

const NUM_FLAKES_DESKTOP = 12;
const NUM_FLAKES_MOBILE = 6;

function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function randomChoice<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export const Snowfall: React.FC = () => {
    // Seasonal display logic (Nov 15 - Jan 15) with URL override ?snow=true
    let show = true; // Force show for festive season
    if (typeof window !== 'undefined') {
        try {
            const url = new URL(window.location.href);
            const override = url.searchParams.get('snow');
            if (override === 'false') {
                show = false;
            } else if (override === 'true') {
                show = true;
            } else {
                const now = new Date();
                const year = now.getFullYear();
                // Show during holiday season: Nov 15 to Jan 15
                const month = now.getMonth();
                const day = now.getDate();
                show = (month === 10 && day >= 15) || (month === 11) || (month === 0 && day <= 15);
            }
        } catch (e) {
            // If URL parsing fails, fallback to show
            show = true;
        }
    }

    // helpful debug output — visible in browser console during development
    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.debug('Snowfall: show=', show, ' (override ?snow=true to force)');
    }

    if (!show) return null;

    // generate flakes once per mount
    const flakes = useMemo(() => {
        const count = typeof window !== 'undefined' && window.innerWidth < 640 ? NUM_FLAKES_MOBILE : NUM_FLAKES_DESKTOP;
        return Array.from({ length: count }).map(() => ({
            left: `${random(0, 100).toFixed(2)}%`,
            size: `${random(8, 16).toFixed(2)}px`,
            delay: `${random(0, 10).toFixed(2)}s`,
            duration: `${random(15, 30).toFixed(2)}s`,
            swayDuration: `${random(4, 8).toFixed(2)}s`,
            opacity: `${random(0.4, 0.9).toFixed(2)}`,
            type: randomChoice(['snowflake', 'star', 'bauble']),
            color: randomChoice(['text-white', 'text-festive-gold', 'text-festive-red', 'text-festive-silver']),
        }));
    }, []);

    if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.debug('Snowfall: flakes generated =', flakes.length);
    }

    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 9999 }}>
            {/* Dev badge to confirm component mounted (visible only in non-production) */}
            {process.env.NODE_ENV !== 'production' && (
                <div className="pointer-events-none fixed top-3 right-3 z-[10000] rounded px-2 py-1 text-xs bg-black/60 text-white">Snow: ON</div>
            )}
            <div className="w-full h-full relative">
                {flakes.map((f, i) => (
                    <div
                        key={i}
                        className="snowflake absolute"
                        style={{
                            top: '-10%',
                            left: f.left,
                            width: f.size,
                            height: f.size,
                            animationDelay: f.delay,
                            animationDuration: f.duration,
                            transform: `translateX(0) translateY(0)`,
                            opacity: Number(f.opacity),
                        }}
                    >
                        <div
                            className={`snow-sway w-full h-full ${f.color}`}
                            style={{ animationDelay: f.delay, animationDuration: f.swayDuration }}
                        >
                            {f.type === 'snowflake' && (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full"
                                    style={{ display: 'block' }}
                                >
                                    <path
                                        d="M12 2v20M5 6l14 12M19 6L5 18"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            )}
                            {f.type === 'star' && (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full"
                                    style={{ display: 'block' }}
                                >
                                    <path
                                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="currentColor"
                                        opacity="0.8"
                                    />
                                </svg>
                            )}
                            {f.type === 'bauble' && (
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full"
                                    style={{ display: 'block' }}
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="8"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="currentColor"
                                        opacity="0.6"
                                    />
                                    <path
                                        d="M12 4v16M4 12h16"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Snowfall;
