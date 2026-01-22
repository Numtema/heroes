
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { GENRES, LANGUAGES, Persona, GenerationMode } from './types';

interface SetupProps {
    show: boolean;
    isTransitioning: boolean;
    hero: Persona | null;
    friend: Persona | null;
    selectedGenre: string;
    selectedLanguage: string;
    customPremise: string;
    richMode: boolean;
    mode: GenerationMode;
    scriptContent: string;
    useCustomHero: boolean;
    onHeroUpload: (file: File) => void;
    onFriendUpload: (file: File) => void;
    onGenreChange: (val: string) => void;
    onLanguageChange: (val: string) => void;
    onPremiseChange: (val: string) => void;
    onRichModeChange: (val: boolean) => void;
    onModeChange: (val: GenerationMode) => void;
    onScriptChange: (val: string) => void;
    onToggleCustomHero: (val: boolean) => void;
    onLaunch: () => void;
}

const Footer = () => {
  const [remixIndex, setRemixIndex] = useState(0);
  const remixes = [
    "Auto-cast characters from script",
    "Visualize the Big Bang",
    "Turn a podcast into a comic",
    "Animate cellular mitosis",
    "Create educational biology manga"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRemixIndex(prev => (prev + 1) % remixes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-3 px-6 flex flex-col md:flex-row justify-between items-center z-[300] border-t-4 border-yellow-400 font-comic">
        <div className="flex items-center gap-2 text-lg md:text-xl">
            <span className="text-yellow-400 font-bold">REMIX IDEA:</span>
            <span className="animate-pulse">{remixes[remixIndex]}</span>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
            <span className="text-gray-500 text-sm hidden md:inline">Build with Gemini</span>
            <a href="https://x.com/ammaar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors text-xl">Created by @ammaar</a>
        </div>
    </div>
  );
};

export const Setup: React.FC<SetupProps> = (props) => {
    if (!props.show && !props.isTransitioning) return null;

    const isScript = props.mode === 'script';
    
    // Validation logic
    const scriptValid = isScript && props.scriptContent.length > 10 && (!props.useCustomHero || props.hero);
    const classicValid = !isScript && props.hero;
    const isReady = (scriptValid || classicValid) && !props.isTransitioning;

    const HeroUploadUI = (
        <div className={`p-3 border-4 border-dashed ${props.hero ? 'border-green-500 bg-green-50' : 'border-blue-300 bg-blue-50'} transition-colors relative group`}>
            <div className="flex justify-between items-center mb-1">
                <p className="font-comic text-lg uppercase font-bold text-blue-900">MAIN CHARACTER</p>
                {props.hero && <span className="text-green-600 font-bold font-comic text-sm animate-pulse">✓ READY</span>}
            </div>
            
            {props.hero ? (
                <div className="flex gap-3 items-center mt-1">
                        <img src={`data:image/jpeg;base64,${props.hero.base64}`} alt="Hero Preview" className="w-20 h-20 object-cover border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.2)] bg-white rotate-[-2deg]" />
                        <label className="cursor-pointer comic-btn bg-yellow-400 text-black text-sm px-3 py-1 hover:bg-yellow-300 transition-transform active:scale-95 uppercase">
                            REPLACE
                            <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && props.onHeroUpload(e.target.files[0])} />
                        </label>
                </div>
            ) : (
                <label className="comic-btn bg-blue-500 text-white text-lg px-3 py-3 block w-full hover:bg-blue-400 cursor-pointer text-center">
                    UPLOAD HERO 
                    <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && props.onHeroUpload(e.target.files[0])} />
                </label>
            )}
        </div>
    );

    return (
        <>
        <style>{`
             @keyframes knockout-exit {
                0% { transform: scale(1) rotate(1deg); }
                15% { transform: scale(1.1) rotate(-5deg); }
                100% { transform: translateY(-200vh) rotate(1080deg) scale(0.5); opacity: 1; }
             }
             @keyframes pow-enter {
                 0% { transform: translate(-50%, -50%) scale(0) rotate(-45deg); opacity: 0; }
                 30% { transform: translate(-50%, -50%) scale(1.5) rotate(10deg); opacity: 1; }
                 100% { transform: translate(-50%, -50%) scale(1.8) rotate(0deg); opacity: 0; }
             }
          `}</style>
        {props.isTransitioning && (
            <div className="fixed top-1/2 left-1/2 z-[210] pointer-events-none" style={{ animation: 'pow-enter 1s forwards ease-out' }}>
                <svg viewBox="0 0 200 150" className="w-[500px] h-[400px] drop-shadow-[0_10px_0_rgba(0,0,0,0.5)]">
                    <path d="M95.7,12.8 L110.2,48.5 L148.5,45.2 L125.6,74.3 L156.8,96.8 L119.4,105.5 L122.7,143.8 L92.5,118.6 L60.3,139.7 L72.1,103.2 L34.5,108.8 L59.9,79.9 L24.7,57.3 L62.5,54.4 L61.2,16.5 z" fill="#FFD700" stroke="black" strokeWidth="4"/>
                    <text x="100" y="95" textAnchor="middle" fontFamily="'Bangers', cursive" fontSize="70" fill="#DC2626" stroke="black" strokeWidth="2" transform="rotate(-5 100 75)">POW!</text>
                </svg>
            </div>
        )}
        
        <div className={`fixed inset-0 z-[200] overflow-y-auto`}
             style={{
                 background: props.isTransitioning ? 'transparent' : 'rgba(0,0,0,0.85)', 
                 backdropFilter: props.isTransitioning ? 'none' : 'blur(6px)',
                 animation: props.isTransitioning ? 'knockout-exit 1s forwards cubic-bezier(.6,-0.28,.74,.05)' : 'none',
                 pointerEvents: props.isTransitioning ? 'none' : 'auto'
             }}>
          <div className="min-h-full flex items-center justify-center p-4 pb-32 md:pb-24">
            {/* Compacted width and internal spacing */}
            <div className="max-w-[900px] w-full bg-white p-4 md:p-5 rotate-1 border-[6px] border-black shadow-[12px_12px_0px_rgba(0,0,0,0.6)] text-center relative transition-all duration-300">
                
                <div className="flex justify-between items-start mb-4">
                    <div className="text-left">
                        <h1 className="font-comic text-5xl text-red-600 leading-none mb-1 tracking-wide inline-block mr-3" style={{textShadow: '2px 2px 0px black'}}>INFINITE</h1>
                        <h1 className="font-comic text-5xl text-yellow-400 leading-none mb-1 tracking-wide inline-block" style={{textShadow: '2px 2px 0px black'}}>HEROES</h1>
                    </div>
                    
                    {/* Mode Toggle */}
                    <div className="flex bg-black p-1 gap-1 rounded-sm shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                         <button onClick={() => props.onModeChange('classic')} className={`px-4 py-1 font-comic text-lg uppercase transition-colors ${!isScript ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'}`}>Classic</button>
                         <button onClick={() => props.onModeChange('script')} className={`px-4 py-1 font-comic text-lg uppercase transition-colors ${isScript ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'}`}>Script</button>
                    </div>
                </div>
                
                {isScript ? (
                    // SCRIPT MODE UI
                    <div className="text-left animate-in fade-in duration-300">
                        <div className="bg-gray-100 p-4 border-4 border-black border-dashed mb-4 relative">
                            <div className="absolute -top-3 left-4 bg-black text-white px-2 font-comic text-sm uppercase">Screenplay / Transcript</div>
                            <textarea 
                                value={props.scriptContent} 
                                onChange={(e) => props.onScriptChange(e.target.value)}
                                placeholder="PASTE YOUR SCRIPT HERE. The AI will analyze it, cast characters automatically, and draw the manga."
                                className="w-full h-48 md:h-64 bg-white p-4 font-mono text-sm md:text-base border-2 border-gray-300 focus:border-black focus:outline-none resize-none leading-relaxed text-gray-800 shadow-inner"
                            />
                            <div className="absolute bottom-2 right-4 text-xs text-gray-400 font-mono">
                                AI AUTO-CASTING ENABLED
                            </div>
                        </div>

                        {/* Custom Hero Toggle */}
                        <div className="bg-gray-100 p-3 border-l-8 border-black mb-4">
                            <label className="flex items-center gap-2 cursor-pointer select-none">
                                <input 
                                    type="checkbox" 
                                    checked={props.useCustomHero} 
                                    onChange={(e) => props.onToggleCustomHero(e.target.checked)} 
                                    className="w-6 h-6 accent-red-600 border-2 border-black" 
                                />
                                <span className="font-comic text-xl font-bold text-black uppercase">
                                    Manual Casting: Use Custom Main Character
                                </span>
                            </label>
                            
                            {props.useCustomHero && (
                                <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
                                    {HeroUploadUI}
                                    <p className="text-sm text-gray-600 font-comic mt-1 ml-1">
                                        * The AI will still cast secondary characters automatically.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="flex gap-4 mb-4">
                             <div className="flex-1">
                                <p className="font-comic text-base mb-1 font-bold text-gray-800">ART STYLE</p>
                                <select value={props.selectedGenre} onChange={(e) => props.onGenreChange(e.target.value)} className="w-full font-comic text-lg p-2 border-2 border-black uppercase bg-white text-black cursor-pointer shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                                    {GENRES.map(g => <option key={g} value={g} className="text-black">{g}</option>)}
                                </select>
                             </div>
                             <div className="flex-1">
                                <p className="font-comic text-base mb-1 font-bold text-gray-800">OUTPUT LANGUAGE</p>
                                <select value={props.selectedLanguage} onChange={(e) => props.onLanguageChange(e.target.value)} className="w-full font-comic text-lg p-2 border-2 border-black uppercase bg-white text-black cursor-pointer shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                                    {LANGUAGES.map(l => <option key={l.code} value={l.code} className="text-black">{l.name}</option>)}
                                </select>
                             </div>
                        </div>
                    </div>
                ) : (
                    // CLASSIC MODE UI
                    <div className="flex flex-col md:flex-row gap-4 mb-4 text-left animate-in fade-in duration-300">
                        
                        {/* Left Column: Cast */}
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="font-comic text-xl text-black border-b-4 border-black mb-1">1. THE CAST</div>
                            
                            {/* HERO UPLOAD */}
                            {HeroUploadUI}

                            {/* CO-STAR UPLOAD */}
                            <div className={`p-3 border-4 border-dashed ${props.friend ? 'border-green-500 bg-green-50' : 'border-purple-300 bg-purple-50'} transition-colors`}>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="font-comic text-lg uppercase font-bold text-purple-900">CO-STAR (OPTIONAL)</p>
                                    {props.friend && <span className="text-green-600 font-bold font-comic text-sm animate-pulse">✓ READY</span>}
                                </div>

                                {props.friend ? (
                                    <div className="flex gap-3 items-center mt-1">
                                        <img src={`data:image/jpeg;base64,${props.friend.base64}`} alt="Co-Star Preview" className="w-20 h-20 object-cover border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.2)] bg-white rotate-[2deg]" />
                                        <label className="cursor-pointer comic-btn bg-yellow-400 text-black text-sm px-3 py-1 hover:bg-yellow-300 transition-transform active:scale-95 uppercase">
                                            REPLACE
                                            <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && props.onFriendUpload(e.target.files[0])} />
                                        </label>
                                    </div>
                                ) : (
                                    <label className="comic-btn bg-purple-500 text-white text-lg px-3 py-3 block w-full hover:bg-purple-400 cursor-pointer text-center">
                                        UPLOAD CO-STAR 
                                        <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && props.onFriendUpload(e.target.files[0])} />
                                    </label>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Settings */}
                        <div className="flex-1 flex flex-col gap-2">
                            <div className="font-comic text-xl text-black border-b-4 border-black mb-1">2. THE STORY</div>
                            
                            <div className="bg-yellow-50 p-3 border-4 border-black h-full flex flex-col justify-between">
                                <div>
                                    <div className="mb-2">
                                        <p className="font-comic text-base mb-1 font-bold text-gray-800">GENRE</p>
                                        <select value={props.selectedGenre} onChange={(e) => props.onGenreChange(e.target.value)} className="w-full font-comic text-lg p-1 border-2 border-black uppercase bg-white text-black cursor-pointer shadow-[3px_3px_0px_rgba(0,0,0,0.2)] focus:outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none transition-all">
                                            {GENRES.map(g => <option key={g} value={g} className="text-black">{g}</option>)}
                                        </select>
                                    </div>

                                    <div className="mb-2">
                                        <p className="font-comic text-base mb-1 font-bold text-gray-800">LANGUAGE</p>
                                        <select value={props.selectedLanguage} onChange={(e) => props.onLanguageChange(e.target.value)} className="w-full font-comic text-lg p-1 border-2 border-black uppercase bg-white text-black cursor-pointer shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                                            {LANGUAGES.map(l => <option key={l.code} value={l.code} className="text-black">{l.name}</option>)}
                                        </select>
                                    </div>

                                    {props.selectedGenre === 'Custom' && (
                                        <div className="mb-2">
                                            <p className="font-comic text-base mb-1 font-bold text-gray-800">PREMISE</p>
                                            <textarea value={props.customPremise} onChange={(e) => props.onPremiseChange(e.target.value)} placeholder="Enter your story premise..." className="w-full p-1 border-2 border-black font-comic text-lg h-16 resize-none shadow-[3px_3px_0px_rgba(0,0,0,0.2)]" />
                                        </div>
                                    )}
                                </div>
                                
                                <label className="flex items-center gap-2 font-comic text-base cursor-pointer text-black mt-1 p-1 hover:bg-yellow-100 rounded border-2 border-transparent hover:border-yellow-300 transition-colors">
                                    <input type="checkbox" checked={props.richMode} onChange={(e) => props.onRichModeChange(e.target.checked)} className="w-4 h-4 accent-black" />
                                    <span className="text-black">NOVEL MODE (Rich Dialogue)</span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                <button onClick={props.onLaunch} disabled={!isReady} className="comic-btn bg-red-600 text-white text-3xl px-6 py-3 w-full hover:bg-red-500 disabled:bg-gray-400 disabled:cursor-not-allowed uppercase tracking-wider">
                    {props.isTransitioning ? (isScript ? 'ANALYZING SCRIPT...' : 'LAUNCHING...') : (isScript ? 'GENERATE FROM SCRIPT' : 'START ADVENTURE!')}
                </button>
            </div>
          </div>
        </div>

        {/* Footer is only visible when setup is active */}
        <Footer />
        </>
    );
}
