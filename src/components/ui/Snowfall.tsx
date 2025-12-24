import React, { useMemo } from 'react';
import { createPortal } from 'react-dom';

const NUM_FLAKES_DESKTOP = 12;
const NUM_FLAKES_MOBILE = 6;

function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function randomChoice<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

export const Snowfall: React.FC = () => {
    // Detect dev mode (Vite) and seasonal display logic (Nov 15 - Jan 15) with URL override ?snow=true
    const isDev = (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.DEV) || (process.env.NODE_ENV !== 'production');

    let show = true; // Force show for festive season
    if (typeof window !== 'undefined') {
        try {
            const url = new URL(window.location.href);
            const override = url.searchParams.get('snow');
            // debug mode: ?snowDebug=true forces visible, large, immediate flakes for troubleshooting
            const debugParam = url.searchParams.get('snowDebug');
            const debug = debugParam === 'true' || debugParam === '1';
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

    if (isDev) {
        // eslint-disable-next-line no-console
        console.info('Snowfall: show=', show, '(override ?snow=true to force)');
    }

    if (!show) return null;

    // generate flakes once per mount
    const flakes = useMemo(() => {
        const count = typeof window !== 'undefined' && window.innerWidth < 640 ? NUM_FLAKES_MOBILE : NUM_FLAKES_DESKTOP;
        // Check if debug mode is active (either via isDev and ?snowDebug=true, or snow=debug)
        let debugMode = false;
        if (typeof window !== 'undefined') {
            try {
                const url = new URL(window.location.href);
                const debugParam = url.searchParams.get('snowDebug') || url.searchParams.get('snow');
                debugMode = debugParam === 'true' || debugParam === '1' || debugParam === 'debug';
            } catch (e) {
                debugMode = false;
            }
        }

        return Array.from({ length: count }).map(() => {
            if (debugMode && isDev) {
                // stronger visuals for debugging
                return {
                    left: `${random(5, 95).toFixed(2)}%`,
                    size: `${random(18, 28).toFixed(2)}px`,
                    delay: `0s`,
                    duration: `${random(8, 12).toFixed(2)}s`,
                    swayDuration: `${random(2, 4).toFixed(2)}s`,
                    opacity: `1`,
                    type: randomChoice(['snowflake', 'star']),
                    color: 'rgba(255,255,255,1)',
                    debugTop: '2%'
                };
            }

            return {
                left: `${random(0, 100).toFixed(2)}%`,
                size: `${random(8, 16).toFixed(2)}px`,
                delay: `${random(0, 10).toFixed(2)}s`,
                duration: `${random(15, 30).toFixed(2)}s`,
                swayDuration: `${random(4, 8).toFixed(2)}s`,
                opacity: `${random(0.4, 0.9).toFixed(2)}`,
                type: randomChoice(['snowflake', 'star', 'bauble']),
                color: randomChoice(['rgba(255,255,255,0.9)', 'rgba(212,175,55,0.9)', 'rgba(239,68,68,0.9)', 'rgba(226,232,240,0.9)']),
            };
        });
    }, []);

    if (isDev) {
        // eslint-disable-next-line no-console
        console.info('Snowfall: flakes generated =', flakes.length);
    }

    const element = (
        <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 9999 }}>
            {/* Dev badge (hidden on homepage) */}
            {/* Dev badge removed per request */}
            <div className="w-full h-full relative">
                {flakes.map((f, i) => (
                    <div
                        key={i}
                        className={`snowflake absolute ${isDev ? 'snowflake-dev' : ''}`}
                        style={{
                            top: f.debugTop ? f.debugTop : '-10%',
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
                            className={`snow-sway w-full h-full`}
                            style={{ animationDelay: f.delay, animationDuration: f.swayDuration, color: f.color }}
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

    // If document is available, render into body via portal to avoid stacking contexts
    if (typeof document !== 'undefined') {
        return createPortal(element, document.body);
    }

    return element;
};

export default Snowfall;
