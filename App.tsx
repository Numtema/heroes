
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import jsPDF from 'jspdf';
import { MAX_STORY_PAGES, BACK_COVER_PAGE, TOTAL_PAGES, INITIAL_PAGES, BATCH_SIZE, DECISION_PAGES, GENRES, TONES, LANGUAGES, ComicFace, Beat, Persona, GenerationMode } from './types';
import { Setup } from './Setup';
import { Book } from './Book';
import { useApiKey } from './useApiKey';
import { ApiKeyDialog } from './ApiKeyDialog';

// --- Constants ---
const MODEL_V3 = "gemini-3-pro-image-preview";
const MODEL_IMAGE_GEN_NAME = MODEL_V3;
const MODEL_TEXT_NAME = MODEL_V3;

const DEFAULT_SCRIPT = `[upbeat song playing]

♪ Is life, is life, that's life ♪

♪ Sing a song of life ♪

♪ Every heartbeat's a miracle ♪

♪ Feel the rhythm growing ♪

♪ Day by day as we go ♪

♪ Look inside, your body is humming ♪

♪ With a million drums that are drumming ♪

♪ Fill your lungs, get ready ♪

♪ Celebrating the joy
That's life ♪

♪ Is life, is life, that's life ♪

♪ Is life, is life, that's life ♪

BIRTH

[bright music playing]

[roaring noise]

[narrator] The universe.

[explosion]

[narrator] The earth.

The development...

that was to lead to man.

Man...

[silly sounds and crash]

[glass breaking sound]

Well, almost.

[bright music playing]

Ah, yes! Man.

And woman.

Yes... woman.

A couple.

Hundreds of millions of spermatozoa
set out for an onslaught.

They pass through
a fantastic obstacle course.

Only one percent of them will succeed
in breaking through the barrier

created by the neck of the womb.

[lively music playing]

[silly noises]

Most of the survivors
will die of exhaustion

in the cavity of the womb.

[silly noises]

[upbeat music playing]

Or they’ll be captured
in the traps of the fallopian tubes.

Very few of them will succeed
in getting anywhere near the egg cell.

[sperm] Yoohoo! Wow.

[clinking noise]

[silly noises]

[laser buzzing]

[crashing and rumbling]

[narrator] The egg cell.

[bright music playing]

[laser buzzing]

[silly noise]

[sperm shrieks]

[narrator] Only one is admitted
to the sanctuary,

although hundreds of millions set out

and the secret entrance disappears.

[silly noise]

[lively music playing]

Oh!

Mm.

-[cracking sounds]
-[bright music playing]

[chromosome 1] Look who's here.

Our complementary chromosomes.

[chromosome 2] Do you think
we're going to match?

You always ask such idiotic questions.

[chromosome 3] Oh, they look quite nice.

-Hmm.
-[chromosome 4] Oh.

[lively music playing]

-[chromosome 5] Come.
-[partner] Oh, wow.

Hmm? Hmm?

Oh.

Ooh.

-Go on everybody, dance!
-[chromosomes humming]

[chatting and giggling]

[whirring]

[bell ringing]

[narrator] Now,
everything can start happening.

-[bell rings]
-The first day of fertilization.

-[bell rings]
-The second day.

[bell rings]

Third... fourth days.

The divisions of the fertilized egg
have become too numerous to count.

[bright music playing]

The neck of the womb closes up again

to preserve the fertilized egg,
which within a few days,

will attach itself
to the wall of the womb.

By the 28th day it is already an embryo.

An embryo surrounded by an outer membrane,
like an envelope,

part of which forms the placenta.

The placenta helps to feed
the growing embryo.

[maestro] Command Post here,
l am listening.

[beeps]

You need supplementary cells
for the skeleton, the skin, and the heart!

What? You're a nuisance.
I can't do everything.

Everybody has his specialty.
You should know that. Hm?

[murmuring]

Hello, chromosome center.

-We have an order for you from the cells.
-[officer] Mm. Yes?

Put operation Mitosis into effect at once.

[silly noise]

[officer] Hey you down there,
get to work.

[yawning]

[officer] Come on chromosomes, get up.

[mumbling and yawning]

-[bright music playing]
-[screeches]

[boing]

[machine whirring]

[laughing gleefully]

-[happy music playing]
-[laughing]

Oh.

[gasps]

[chromosome shrieks and moans]

[enzyme 1] Let's see
how this chromosome is made.

[enzyme 2] But he's made
just like the others, isn't he?

[enzyme 1] Do you think so?

Why don’t you have a closer look?

[enzyme 4] You up there, you can come now.

Coming.

[popping sound]

-Oh!
-What about me?

Uh-huh, uh-huh, uh-huh.

-This is my place! It's my place.
-No, I was here first.

-Go away.
-You're a bunch of snobs.

-Whoa!
-[enzyme 3] ln your proper places, please.

[ping and pop]

[squeaks]

Hm-mm. Over there.

That will do, we haven't time
for playing the fool.

No, not you. I don't want this one.

[popping]

[chief 1] You take this lot,
I will do them.

[chief 2] Okay.

[silly noise]

Ow! Ow! Ow!

And what do you think you're trying to do?

Cause a genetic accident?

Hm.

[squeaking]

[voice] Hurry up you late comers.
It's almost time.

[bright music playing]

[squeaking]

[rumbling]

[screeching]

[voice] Are you ready for cell division?

Mitosis!

[rumbling and screeching]

[upbeat music playing]

[rumbling]

[screeching]

Operation Mitosis
successfully accomplished, Maestro.

[maestro] Jolly good.

[giggling]

[voice] Eye cells...

go to platform number 47.

Muscle cells, number 10.

Bone cells, platform number 17.

[grunts and mumbles]

[silly sound]

[panting]

Heart cells, platform number 22.

[indistinct chattering]

Come along cells, conduct yourselves
in an orderly fashion!

There are 200 different kinds of you,

so without discipline
we'll never get where we're going.

[laughing heartily]

[officer] Hurry along there,
to your platform please.

Cells for the liver, platform 8.

[indistinct chattering]

Cells for the muscles, platform 10.

[giggling]

Skin cells platform number 14.

Keep calm please, move along.

-Don't push, please.
-[grunts]

There's room for everyone.

-[officer] No!
-Cells for the heart, platform 19.

And let's have some order, please!

Bone cells, platform 17.

Liver cells, platform number 8.

Cells for the muscles, platform 10.

[giggling]

Cells for the skin, platform number...

[mumbling]

[bright music playing]

[thudding]

-[bell rings]
-[narrator] By the 35th day,

the embryo or fetus
is six millimeters long.

By the 42nd day it is 12 millimeters.

By the 15th day, 20 millimeters.

[engine racing and tires screeching]

[silly noises]

[tires screeching]

[silly noises]

[voice] Heart cell...

[cell] I'm here!

You're late. Step up circulation
towards platform 19.

Pay attention you lot,
your platform comes up next.

[bone cell] I'm sorry.

[voice] Bone cells, platform number 17.

[mumbling]

[bone cell 2] And you,
where are you going?

[bone cell 3] I'm headed
for the shoulder blade,

there's still a lot to be done there,
and you, Chief?

Way out west to the humerus.
There's new land there to conquer.

-[bone cell] What's the hold up?
-Dunno! It's at the front.

[silly noises]

[bone cell 4] Just what are we doing here?

[bone cell 5] Search me, dear.

[bone cell 6] The whole way in vain!

-They can't treat us like this.
-You are so right.

l agree, they can't.

[horse neighing]

[scout] Listen, everyone! Good news!

Further west towards the forearm
there are immense territories to conquer.

[scout2] It is a brand new land,
follow us. Yippee. Come!

[laughs]

[tires screeching]

[silly noise]

[voice] Cells for the eyes,
you're needed urgently.

-[gasps]
-Proceed at once to platform 4.

-Will you stop pushing?
-Let us through.

But it's impossible. Unless you fly.

I'm an eye cell, silly fool,
not a fly cell.

[voice] Eye cells, we're sending
a detachment of engineers

to open the way for you.

[sapper] Follow us.

[gasping and shouting]

[engines whizzing]

[sapper] Units ready, forward march.

[bright music playing]

Hooray!

[laughing]

[chief] Here we are, chaps!

Forward march. Units for the cornea,
to the left,

Units for the retina, to the right.

Goodbye, I so enjoyed our trip.

Cells for the crystalline lens, follow me.

[moaning and groaning]

[giggling]

-[groaning]
-Further. Further. Further.

Stop! Our objective.

[mumbling]

[lively music playing]

[delightful sounds]

[silly popping sounds]

[bright music playing]

[narrator] Sixty days, 35 millimeters.

[popping sounds]

[gloomy music playing]

Send me a messenger.

A little respect please. Get off my nose.

To the cell-commander, the troops
are exhausted and need nourishment.

Right, off you go.

-Huh?
-[screeching]

[silly noise]

[heart beating]

[engine whizzing]

[alarm sounding]

-[silly popping noises]
-[messenger] Ah!

[screeches]

"Proteins, collagen, ovalbumin..."

Yes, I've got that.

Take this order:
collagen and ovalbumin right away.

[screeches] Teams 5 and 22,

you're needed at the duplicating room.

[yawning]

[enzyme] Hurry up, it's an emergency.

-[silly noise]
-[happy music playing]

[boing]

[boing]

[popping]

Hey ho.

[chuckling]

-Oh.
-Yeah!

How come instead of a T there’s a U?
I don't understand this machine.

Well, we will just have to do.

That's fine, the RNA messenger
has been sent off.

[upbeat music playing]

[silly noise]

-Oh.
-[pop]

[enzyme] That's good. That's okay.

-[yells]
-That'll do. That's good.

Oh, no, no. Not that. No, no. I need a U.

-[gasps]
-You've got it wrong.

[groaning and gasping]

Hey, you don't fit at all, you two.
You're in the wrong place.

[magical sounds]

[crying]

-[pops]
-[sighs]

[enzyme] Yes, yes. That's all right. Next.

[feel-good music playing]

[silly popping sounds]

[feel-good music playing]

There. There you are.

There you are. There.

[specialist thinks] I wish someone
would explain what all this is for.

[bright music playing]

What on earth are they making?

I don't understand a thing.

[specialist 2] Protein's ready.

Protein? Ready to be dispatched, is it?

[whizzing sounds]

-[enzyme] Load up those proteins.
-[bright music playing]

[laid-back music playing]

[grunting and groaning]

[protein] Right, I'm on my way.

[bright music playing]

[sugar] Look who's arrived.

Move further along protein.
They need you over there.

[laughing]

Let’s go!

[groans]

-[grunts]
-[happy laughter]

Yippee!

-[upbeat music playing]
-[heart beating]

-[bell rings]
-[narrator] Eighty days, nine centimeters.

-[bell rings]
-Hundred and 20 days, 20 centimeters.

[lively music playing]

-[bell rings]
-Hundred and 40 days, 25 centimeters.

-Hundred and 70 days, 30 centimeters.

-[bell rings]
-Two hundred days, 35 centimeters.

-[bell rings]
-225 days, 40 centimeters.

-[bell rings]
-250 days, 45 centimeters.

-[bell rings]
-270 days, nine months, 50 centimeters.

Weight: 3.2 kilograms.

The assembly of 60 billion cells.

A single fertilized cell
has manufactured muscles and skin,

skeleton and brain, heart and lungs,

nails, arms and legs.

[groaning and gasping]

For generation after generation,
a single cell has made...

life.

[crying]

[chuckling]

Ah!

Oh! [giggling]

[lively music playing]`;

const App: React.FC = () => {
  // --- API Key Hook ---
  const { validateApiKey, setShowApiKeyDialog, showApiKeyDialog, handleApiKeyDialogContinue } = useApiKey();

  const [hero, setHeroState] = useState<Persona | null>(null);
  const [friend, setFriendState] = useState<Persona | null>(null);
  const [selectedGenre, setSelectedGenre] = useState(GENRES[3]); // Default to Fantasy for scripts
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0].code);
  const [customPremise, setCustomPremise] = useState("");
  const [storyTone, setStoryTone] = useState(TONES[0]);
  const [richMode, setRichMode] = useState(true);
  const [mode, setMode] = useState<GenerationMode>('script');
  const [scriptContent, setScriptContent] = useState(DEFAULT_SCRIPT);
  const [useCustomHero, setUseCustomHero] = useState(false);
  
  const heroRef = useRef<Persona | null>(null);
  const friendRef = useRef<Persona | null>(null);
  const scriptBeatsRef = useRef<Beat[]>([]);

  const setHero = (p: Persona | null) => { setHeroState(p); heroRef.current = p; };
  const setFriend = (p: Persona | null) => { setFriendState(p); friendRef.current = p; };
  
  const [comicFaces, setComicFaces] = useState<ComicFace[]>([]);
  const [currentSheetIndex, setCurrentSheetIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  
  // --- Transition States ---
  const [showSetup, setShowSetup] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const generatingPages = useRef(new Set<number>());
  const historyRef = useRef<ComicFace[]>([]);

  // --- AI Helpers ---
  const getAI = () => {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  };

  const handleAPIError = (e: any) => {
    const msg = String(e);
    console.error("API Error:", msg);
    if (
      msg.includes('Requested entity was not found') || 
      msg.includes('API_KEY_INVALID') || 
      msg.toLowerCase().includes('permission denied')
    ) {
      setShowApiKeyDialog(true);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve((reader.result as string).split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const generateBeat = async (history: ComicFace[], isRightPage: boolean, pageNum: number, isDecisionPage: boolean): Promise<Beat> => {
    
    // --- SCRIPT MODE OVERRIDE ---
    if (mode === 'script' && scriptBeatsRef.current.length > 0) {
        // In script mode, we try to use pre-calculated beats
        const beatIndex = pageNum - 1;
        if (scriptBeatsRef.current[beatIndex]) {
            // SAFEGUARD: Ensure choices is always defined to prevent "Cannot read property 'length' of undefined"
            const b = scriptBeatsRef.current[beatIndex];
            return { ...b, choices: b.choices || [] };
        }
    }

    if (!heroRef.current) throw new Error("No Hero");

    const isFinalPage = pageNum === MAX_STORY_PAGES;
    const langName = LANGUAGES.find(l => l.code === selectedLanguage)?.name || "English";

    // Get relevant history and last focus to prevent repetition
    const relevantHistory = history
        .filter(p => p.type === 'story' && p.narrative && (p.pageIndex || 0) < pageNum)
        .sort((a, b) => (a.pageIndex || 0) - (b.pageIndex || 0));

    const lastBeat = relevantHistory[relevantHistory.length - 1]?.narrative;
    const lastFocus = lastBeat?.focus_char || 'none';

    const historyText = relevantHistory.map(p => 
      `[Page ${p.pageIndex}] [Focus: ${p.narrative?.focus_char}] (Caption: "${p.narrative?.caption || ''}") (Dialogue: "${p.narrative?.dialogue || ''}") (Scene: ${p.narrative?.scene}) ${p.resolvedChoice ? `-> USER CHOICE: "${p.resolvedChoice}"` : ''}`
    ).join('\n');

    // Aggressive Co-Star Injection Logic
    let friendInstruction = "Not yet introduced.";
    if (friendRef.current) {
        friendInstruction = "ACTIVE and PRESENT (User Provided).";
        // If the last panel wasn't the friend, strongly suggest switching to them to maintain balance.
        if (lastFocus !== 'friend' && Math.random() > 0.4) {
             friendInstruction += " MANDATORY: FOCUS ON THE CO-STAR FOR THIS PANEL.";
        } else {
             friendInstruction += " Ensure they are woven into the scene even if not the main focus.";
        }
    }

    // Determine Core Story Driver (Genre vs Custom Premise)
    let coreDriver = `GENRE: ${selectedGenre}. TONE: ${storyTone}.`;
    if (selectedGenre === 'Custom') {
        coreDriver = `STORY PREMISE: ${customPremise || "A totally unique, unpredictable adventure"}. (Follow this premise strictly over standard genre tropes).`;
    }
    
    // Guardrails to prevent everything becoming "Quantum Sci-Fi"
    const guardrails = `
    NEGATIVE CONSTRAINTS:
    1. UNLESS GENRE IS "Dark Sci-Fi" OR "Superhero Action" OR "Custom": DO NOT use technical jargon like "Quantum", "Timeline", "Portal", "Multiverse", or "Singularity".
    2. IF GENRE IS "Teen Drama" OR "Lighthearted Comedy": The "stakes" must be SOCIAL, EMOTIONAL, or PERSONAL (e.g., a rumor, a competition, a broken promise, being late, embarrassing oneself). Do NOT make it life-or-death. Keep it grounded.
    3. Avoid "The artifact" or "The device" unless established earlier.
    `;

    // BASE INSTRUCTION: Strictly enforce language for output text.
    let instruction = `Continue the story. ALL OUTPUT TEXT (Captions, Dialogue, Choices) MUST BE IN ${langName.toUpperCase()}. ${coreDriver} ${guardrails}`;
    if (richMode) {
        instruction += " RICH/NOVEL MODE ENABLED. Prioritize deeper character thoughts, descriptive captions, and meaningful dialogue exchanges over short punchlines.";
    }

    if (isFinalPage) {
        instruction += " FINAL PAGE. KARMIC CLIFFHANGER REQUIRED. You MUST explicitly reference the User's choice from PAGE 3 in the narrative and show how that specific philosophy led to this conclusion. Text must end with 'TO BE CONTINUED...' (or localized equivalent).";
    } else if (isDecisionPage) {
        instruction += " End with a PSYCHOLOGICAL choice about VALUES, RELATIONSHIPS, or RISK. (e.g., Truth vs. Safety, Forgive vs. Avenge). The options must NOT be simple physical actions like 'Go Left'.";
    } else {
        // Neutralized Narrative Arc to avoid forcing "scary mystery" tones if the genre doesn't call for it.
        if (pageNum === 1) {
            instruction += " INCITING INCIDENT. An event disrupts the status quo. Establish the genre's intended mood. (If Slice of Life: A social snag/surprise. If Adventure: A call to action).";
        } else if (pageNum <= 4) {
            instruction += " RISING ACTION. The heroes engage with the new situation. Focus on dialogue, character dynamics, and initial challenges.";
        } else if (pageNum <= 8) {
            instruction += " COMPLICATION. A twist occurs! A secret is revealed, a misunderstanding deepens, or the path is blocked. (Keep intensity appropriate to Genre - e.g. Social awkwardness for Comedy, Danger for Horror).";
        } else {
            instruction += " CLIMAX. The confrontation with the main conflict. The truth comes out, the contest ends, or the battle is fought.";
        }
    }

    // Dynamic text limits based on richMode
    const capLimit = richMode ? "max 35 words. Detailed narration or internal monologue" : "max 15 words";
    const diaLimit = richMode ? "max 30 words. Rich, character-driven speech" : "max 12 words";

    const prompt = `
You are writing a comic book script. PAGE ${pageNum} of ${MAX_STORY_PAGES}.
TARGET LANGUAGE FOR TEXT: ${langName} (CRITICAL: CAPTIONS, DIALOGUE, CHOICES MUST BE IN THIS LANGUAGE).
${coreDriver}

CHARACTERS:
- HERO: Active.
- CO-STAR: ${friendInstruction}

PREVIOUS PANELS (READ CAREFULLY):
${historyText.length > 0 ? historyText : "Start the adventure."}

RULES:
1. NO REPETITION. Do not use the same captions or dialogue from previous pages.
2. IF CO-STAR IS ACTIVE, THEY MUST APPEAR FREQUENTLY.
3. VARIETY. If page ${pageNum-1} was an action shot, make this one a reaction or wide shot.
4. LANGUAGE: All user-facing text MUST be in ${langName}.
5. Avoid saying "CO-star" and "hero" in the text captions. Use names if established, or generic descriptors.

INSTRUCTION: ${instruction}

OUTPUT STRICT JSON ONLY (No markdown formatting):
{
  "caption": "Unique narrator text in ${langName}. (${capLimit}).",
  "dialogue": "Unique speech in ${langName}. (${diaLimit}). Optional.",
  "scene": "Vivid visual description (ALWAYS IN ENGLISH for the artist model). MUST mention 'HERO' or 'CO-STAR' if they are present.",
  "focus_char": "hero" OR "friend" OR "other",
  "choices": ["Option A in ${langName}", "Option B in ${langName}"] (Only if decision page)
}
`;
    try {
        const ai = getAI();
        const res = await ai.models.generateContent({ model: MODEL_TEXT_NAME, contents: prompt, config: { responseMimeType: 'application/json' } });
        let rawText = res.text || "{}";
        rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
        
        const parsed = JSON.parse(rawText);
        
        if (parsed.dialogue) parsed.dialogue = parsed.dialogue.replace(/^[\w\s\-]+:\s*/i, '').replace(/["']/g, '').trim();
        if (parsed.caption) parsed.caption = parsed.caption.replace(/^[\w\s\-]+:\s*/i, '').trim();
        if (!isDecisionPage) parsed.choices = [];
        if (isDecisionPage && !isFinalPage && (!parsed.choices || parsed.choices.length < 2)) parsed.choices = ["Option A", "Option B"];
        if (!['hero', 'friend', 'other'].includes(parsed.focus_char)) parsed.focus_char = 'hero';

        return parsed as Beat;
    } catch (e) {
        console.error("Beat generation failed", e);
        handleAPIError(e);
        return { 
            caption: pageNum === 1 ? "It began..." : "...", 
            scene: `Generic scene for page ${pageNum}.`, 
            focus_char: 'hero', 
            choices: [] 
        };
    }
  };

  const generatePersona = async (desc: string): Promise<Persona> => {
      const style = selectedGenre === 'Custom' ? "Modern American comic book art" : `${selectedGenre} comic`;
      try {
          const ai = getAI();
          const res = await ai.models.generateContent({
              model: MODEL_IMAGE_GEN_NAME,
              contents: { text: `STYLE: Masterpiece ${style} character sheet, detailed ink, neutral background. FULL BODY. Character: ${desc}` },
              config: { imageConfig: { aspectRatio: '1:1' } }
          });
          const part = res.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
          if (part?.inlineData?.data) return { base64: part.inlineData.data, desc };
          throw new Error("Failed");
      } catch (e) { 
        handleAPIError(e);
        throw e; 
      }
  };

  const generateImage = async (beat: Beat, type: ComicFace['type']): Promise<string> => {
    const contents = [];
    if (heroRef.current?.base64) {
        contents.push({ text: "REFERENCE 1 [HERO]:" });
        contents.push({ inlineData: { mimeType: 'image/jpeg', data: heroRef.current.base64 } });
    }
    if (friendRef.current?.base64) {
        contents.push({ text: "REFERENCE 2 [CO-STAR]:" });
        contents.push({ inlineData: { mimeType: 'image/jpeg', data: friendRef.current.base64 } });
    }

    const styleEra = selectedGenre === 'Custom' ? "Modern American" : selectedGenre;
    let promptText = `STYLE: ${styleEra} comic book art, detailed ink, vibrant colors. `;
    
    if (type === 'cover') {
        const langName = LANGUAGES.find(l => l.code === selectedLanguage)?.name || "English";
        promptText += `TYPE: Comic Book Cover. TITLE: "INFINITE HEROES" (OR LOCALIZED TRANSLATION IN ${langName.toUpperCase()}). Main visual: Dynamic action shot of [HERO] (Use REFERENCE 1).`;
    } else if (type === 'back_cover') {
        promptText += `TYPE: Comic Back Cover. FULL PAGE VERTICAL ART. Dramatic teaser. Text: "THE END".`;
    } else {
        promptText += `TYPE: Vertical comic panel. SCENE: ${beat.scene}. `;
        promptText += `INSTRUCTIONS: Maintain strict character likeness. If scene mentions 'HERO' or implied main character, you MUST use REFERENCE 1. If scene mentions 'CO-STAR', 'SIDEKICK' or implied secondary character, you MUST use REFERENCE 2.`;
        
        if (beat.caption) promptText += ` INCLUDE CAPTION BOX: "${beat.caption}"`;
        if (beat.dialogue) promptText += ` INCLUDE SPEECH BUBBLE: "${beat.dialogue}"`;
    }

    contents.push({ text: promptText });

    try {
        const ai = getAI();
        const res = await ai.models.generateContent({
          model: MODEL_IMAGE_GEN_NAME,
          contents: contents,
          config: { imageConfig: { aspectRatio: '2:3' } }
        });
        const part = res.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
        return part?.inlineData?.data ? `data:${part.inlineData.mimeType};base64,${part.inlineData.data}` : '';
    } catch (e) { 
        handleAPIError(e);
        return ''; 
    }
  };

  const updateFaceState = (id: string, updates: Partial<ComicFace>) => {
      setComicFaces(prev => prev.map(f => f.id === id ? { ...f, ...updates } : f));
      const idx = historyRef.current.findIndex(f => f.id === id);
      if (idx !== -1) historyRef.current[idx] = { ...historyRef.current[idx], ...updates };
  };

  const generateSinglePage = async (faceId: string, pageNum: number, type: ComicFace['type']) => {
      const isDecision = DECISION_PAGES.includes(pageNum);
      let beat: Beat = { scene: "", choices: [], focus_char: 'other' };

      if (type === 'cover') {
           // Cover beat is handled in generateImage
      } else if (type === 'back_cover') {
           beat = { scene: "Thematic teaser image", choices: [], focus_char: 'other' };
      } else {
           beat = await generateBeat(historyRef.current, pageNum % 2 === 0, pageNum, isDecision);
      }

      if (beat.focus_char === 'friend' && !friendRef.current && type === 'story' && mode === 'classic') {
          try {
              const newSidekick = await generatePersona(selectedGenre === 'Custom' ? "A fitting sidekick for this story" : `Sidekick for ${selectedGenre} story.`);
              setFriend(newSidekick);
          } catch (e) { beat.focus_char = 'other'; }
      }

      updateFaceState(faceId, { narrative: beat, choices: beat.choices, isDecisionPage: isDecision });
      const url = await generateImage(beat, type);
      updateFaceState(faceId, { imageUrl: url, isLoading: false });
  };

  const generateBatch = async (startPage: number, count: number) => {
      const pagesToGen: number[] = [];
      for (let i = 0; i < count; i++) {
          const p = startPage + i;
          if (p <= TOTAL_PAGES && !generatingPages.current.has(p)) {
              pagesToGen.push(p);
          }
      }
      
      if (pagesToGen.length === 0) return;
      pagesToGen.forEach(p => generatingPages.current.add(p));

      const newFaces: ComicFace[] = [];
      pagesToGen.forEach(pageNum => {
          const type = pageNum === BACK_COVER_PAGE ? 'back_cover' : 'story';
          newFaces.push({ id: `page-${pageNum}`, type, choices: [], isLoading: true, pageIndex: pageNum });
      });

      setComicFaces(prev => {
          const existing = new Set(prev.map(f => f.id));
          return [...prev, ...newFaces.filter(f => !existing.has(f.id))];
      });
      newFaces.forEach(f => { if (!historyRef.current.find(h => h.id === f.id)) historyRef.current.push(f); });

      try {
          for (const pageNum of pagesToGen) {
               await generateSinglePage(`page-${pageNum}`, pageNum, pageNum === BACK_COVER_PAGE ? 'back_cover' : 'story');
               generatingPages.current.delete(pageNum);
          }
      } catch (e) {
          console.error("Batch generation error", e);
      } finally {
          pagesToGen.forEach(p => generatingPages.current.delete(p));
      }
  }

  // --- SCRIPT ANALYSIS LOGIC ---
  const analyzeScriptAndCast = async () => {
      const ai = getAI();
      const prompt = `
      Analyze this script/transcript:
      "${scriptContent.substring(0, 15000)}"

      1. Identify the TWO most visually prominent characters or entities (e.g. 'The Hero' and 'The Sidekick' or 'Narrator' and 'Cell').
      2. Write a short physical description for a character sheet for each. 

      OUTPUT JSON:
      {
        "hero_desc": "Visual description of main character",
        "friend_desc": "Visual description of secondary character"
      }
      `;
      
      const res = await ai.models.generateContent({ model: MODEL_TEXT_NAME, contents: prompt, config: { responseMimeType: 'application/json' } });
      const json = JSON.parse(res.text || "{}");
      
      // Auto-generate cast
      // If Custom Hero is enabled and user has provided one, skip generating hero image but update description
      if (!useCustomHero || !heroRef.current) {
          const heroP = await generatePersona(json.hero_desc || "Main Character");
          setHero(heroP);
      } else {
           // Attach the AI's understanding of who the hero is to the user's custom persona
           setHero({ ...heroRef.current, desc: json.hero_desc || "Main Character" });
      }
      
      if (json.friend_desc) {
          const friendP = await generatePersona(json.friend_desc);
          setFriend(friendP);
      }
  };

  const storyboardScript = async () => {
      const ai = getAI();
      const langName = LANGUAGES.find(l => l.code === selectedLanguage)?.name || "English";
      const prompt = `
      STORYBOARD THIS SCRIPT into exactly ${MAX_STORY_PAGES} comic book panels.
      SCRIPT: "${scriptContent.substring(0, 25000)}"

      RULES:
      1. Break the script down into ${MAX_STORY_PAGES} key moments.
      2. Target Language for Dialogue/Captions: ${langName}.
      3. 'scene' must be in English for the image generator.
      4. 'focus_char' must be 'hero', 'friend', or 'other'.

      OUTPUT JSON Array:
      [
        { "caption": "...", "dialogue": "...", "scene": "...", "focus_char": "hero" },
        ... (Total ${MAX_STORY_PAGES} items)
      ]
      `;
      const res = await ai.models.generateContent({ model: MODEL_TEXT_NAME, contents: prompt, config: { responseMimeType: 'application/json' } });
      let beats = JSON.parse(res.text || "[]") as Beat[];
      
      // SANITIZATION: Fix potential undefined choices in parsed beats
      beats = beats.map(b => ({ ...b, choices: b.choices || [] }));

      // Ensure we have enough beats
      if (beats.length < MAX_STORY_PAGES) {
          // pad with generics if failed
          while(beats.length < MAX_STORY_PAGES) beats.push({ scene: "The journey continues...", focus_char: "other", choices: [] });
      }
      scriptBeatsRef.current = beats;
  };

  const launchStory = async () => {
    // --- API KEY VALIDATION ---
    const hasKey = await validateApiKey();
    if (!hasKey) return; // Stop if cancelled or invalid
    
    setIsTransitioning(true);

    if (mode === 'script') {
        try {
            // 1. Cast Characters
            await analyzeScriptAndCast();
            // 2. Storyboard
            await storyboardScript();
        } catch (e) {
            console.error("Script analysis failed", e);
            alert("Script analysis failed. Please check API key quota.");
            setIsTransitioning(false);
            return;
        }
    } else {
        // Classic checks
        if (!heroRef.current) return;
        if (selectedGenre === 'Custom' && !customPremise.trim()) {
            alert("Please enter a custom story premise.");
            setIsTransitioning(false);
            return;
        }
    }
    
    // Set tone based on genre if in classic mode, or default for script
    if (mode === 'classic') {
        let availableTones = TONES;
        if (selectedGenre === "Teen Drama / Slice of Life" || selectedGenre === "Lighthearted Comedy") {
            availableTones = TONES.filter(t => t.includes("CASUAL") || t.includes("WHOLESOME") || t.includes("QUIPPY"));
        } else if (selectedGenre === "Classic Horror") {
            availableTones = TONES.filter(t => t.includes("INNER-MONOLOGUE") || t.includes("OPERATIC"));
        }
        setStoryTone(availableTones[Math.floor(Math.random() * availableTones.length)]);
    }

    const coverFace: ComicFace = { id: 'cover', type: 'cover', choices: [], isLoading: true, pageIndex: 0 };
    setComicFaces([coverFace]);
    historyRef.current = [coverFace];
    generatingPages.current.add(0);

    // Start generation
    generateSinglePage('cover', 0, 'cover').finally(() => generatingPages.current.delete(0));
    
    setTimeout(async () => {
        setIsStarted(true);
        setShowSetup(false);
        setIsTransitioning(false);
        await generateBatch(1, INITIAL_PAGES);
        generateBatch(3, 3);
    }, 1100);
  };

  const handleChoice = async (pageIndex: number, choice: string) => {
      updateFaceState(`page-${pageIndex}`, { resolvedChoice: choice });
      const maxPage = Math.max(...historyRef.current.map(f => f.pageIndex || 0));
      if (maxPage + 1 <= TOTAL_PAGES) {
          generateBatch(maxPage + 1, BATCH_SIZE);
      }
  }

  const resetApp = () => {
      setIsStarted(false);
      setShowSetup(true);
      setComicFaces([]);
      setCurrentSheetIndex(0);
      historyRef.current = [];
      generatingPages.current.clear();
      scriptBeatsRef.current = [];
      setHero(null);
      setFriend(null);
  };

  const downloadPDF = () => {
    const PAGE_WIDTH = 480;
    const PAGE_HEIGHT = 720;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: [PAGE_WIDTH, PAGE_HEIGHT] });
    const pagesToPrint = comicFaces.filter(face => face.imageUrl && !face.isLoading).sort((a, b) => (a.pageIndex || 0) - (b.pageIndex || 0));

    pagesToPrint.forEach((face, index) => {
        if (index > 0) doc.addPage([PAGE_WIDTH, PAGE_HEIGHT], 'portrait');
        if (face.imageUrl) doc.addImage(face.imageUrl, 'JPEG', 0, 0, PAGE_WIDTH, PAGE_HEIGHT);
    });
    doc.save('Infinite-Heroes-Issue.pdf');
  };

  const handleHeroUpload = async (file: File) => {
       try { const base64 = await fileToBase64(file); setHero({ base64, desc: "The Main Hero" }); } catch (e) { alert("Hero upload failed"); }
  };
  const handleFriendUpload = async (file: File) => {
       try { const base64 = await fileToBase64(file); setFriend({ base64, desc: "The Sidekick/Rival" }); } catch (e) { alert("Friend upload failed"); }
  };

  const handleSheetClick = (index: number) => {
      if (!isStarted) return;
      if (index === 0 && currentSheetIndex === 0) return;
      if (index < currentSheetIndex) setCurrentSheetIndex(index);
      else if (index === currentSheetIndex && comicFaces.find(f => f.pageIndex === index)?.imageUrl) setCurrentSheetIndex(prev => prev + 1);
  };

  return (
    <div className="comic-scene">
      {showApiKeyDialog && <ApiKeyDialog onContinue={handleApiKeyDialogContinue} />}
      
      <Setup 
          show={showSetup}
          isTransitioning={isTransitioning}
          hero={hero}
          friend={friend}
          selectedGenre={selectedGenre}
          selectedLanguage={selectedLanguage}
          customPremise={customPremise}
          richMode={richMode}
          mode={mode}
          scriptContent={scriptContent}
          useCustomHero={useCustomHero}
          onHeroUpload={handleHeroUpload}
          onFriendUpload={handleFriendUpload}
          onGenreChange={setSelectedGenre}
          onLanguageChange={setSelectedLanguage}
          onPremiseChange={setCustomPremise}
          onRichModeChange={setRichMode}
          onModeChange={setMode}
          onScriptChange={setScriptContent}
          onToggleCustomHero={setUseCustomHero}
          onLaunch={launchStory}
      />
      
      <Book 
          comicFaces={comicFaces}
          currentSheetIndex={currentSheetIndex}
          isStarted={isStarted}
          isSetupVisible={showSetup && !isTransitioning}
          onSheetClick={handleSheetClick}
          onChoice={handleChoice}
          onOpenBook={() => setCurrentSheetIndex(1)}
          onDownload={downloadPDF}
          onReset={resetApp}
      />
    </div>
  );
};

export default App;
