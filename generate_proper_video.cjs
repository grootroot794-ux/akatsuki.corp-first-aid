const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const frameDir = path.join(__dirname, 'video_frames_proper');
if (!fs.existsSync(frameDir)) fs.mkdirSync(frameDir);

// 40-second comprehensive training guide with 7 detailed clinical slides
const slides = [
  // Slide 1: Intro (0s - 5s)
  {
    duration: 5,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#10254C"/>
          <stop offset="65%" stop-color="#040914"/>
        </radialGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#E11D2E" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#E11D2E" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <circle cx="960" cy="380" r="280" fill="url(#glow)"/>

      <!-- Center Large Akatsuki Logo -->
      <g transform="translate(610, 260)">
        <polygon points="90,8 165,52 165,140 90,184 15,140 15,52" fill="none" stroke="#FFFFFF" stroke-width="15" stroke-linejoin="round"/>
        <ellipse cx="90" cy="96" rx="66" ry="27" fill="none" stroke="#FFFFFF" stroke-width="9" transform="rotate(-28 90 96)"/>
        <circle cx="90" cy="96" r="18" fill="#E11D2E"/>

        <line x1="210" y1="24" x2="210" y2="168" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>

        <text x="250" y="104" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="64" letter-spacing="4">AKATSUKI CORP</text>
        <text x="254" y="156" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="22" letter-spacing="9">YOU HEALTH OUR WAYS</text>
      </g>

      <text x="960" y="580" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="52" text-anchor="middle" letter-spacing="3">COMPLETE EMERGENCY FIRST AID PROTOCOL</text>
      <text x="960" y="650" fill="#FF4D5E" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="30" text-anchor="middle" letter-spacing="5">FULL STEP-BY-STEP CLINICAL GUIDE</text>
      <text x="960" y="730" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-size="26" text-anchor="middle">Official Emergency Training Series · Certified Clinical Sequence</text>

      <rect x="760" y="840" width="400" height="60" rx="30" fill="#E11D2E"/>
      <text x="960" y="878" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="24" text-anchor="middle" letter-spacing="2">EMERGENCY DISPATCH: 1122</text>
    </svg>`
  },

  // Slide 2: Scene Assessment DRSABCD (5s - 11s)
  {
    duration: 6,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
      <rect width="100%" height="100%" fill="#040914"/>
      <!-- Watermark Logo -->
      <g transform="translate(80, 60) scale(0.9)">
        <polygon points="65,5 115,35 115,95 65,125 15,95 15,35" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round"/>
        <ellipse cx="65" cy="65" rx="46" ry="19" fill="none" stroke="#FFFFFF" stroke-width="6.5" transform="rotate(-28 65 65)"/>
        <circle cx="65" cy="65" r="13" fill="#E11D2E"/>
        <line x1="150" y1="20" x2="150" y2="110" stroke="#FFFFFF" stroke-width="3.5"/>
        <text x="180" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="44">AKATSUKI CORP</text>
        <text x="182" y="105" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="16" letter-spacing="6">YOU HEALTH OUR WAYS</text>
      </g>
      <rect x="1600" y="65" width="240" height="52" rx="26" fill="#E11D2E"/>
      <text x="1720" y="99" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">MODULE 1 / 5</text>

      <text x="960" y="240" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="46" text-anchor="middle">PRIMARY SURVEY: DRSABCD PROTOCOL</text>
      <text x="960" y="295" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-size="24" text-anchor="middle">Systematic Assessment Before Beginning Treatment</text>

      <!-- 4 Cards -->
      <g transform="translate(140, 360)">
        <rect width="380" height="460" rx="20" fill="rgba(11,27,51,0.75)" stroke="rgba(255,255,255,0.12)"/>
        <circle cx="190" cy="90" r="45" fill="#E11D2E"/>
        <text x="190" y="104" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="34" text-anchor="middle">D</text>
        <text x="190" y="180" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">DANGER</text>
        <text x="190" y="240" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Check surroundings:</text>
        <text x="190" y="280" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Live wires, fire, traffic,</text>
        <text x="190" y="320" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">toxic gas, or hazards.</text>
        <text x="190" y="390" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="18" text-anchor="middle">Ensure personal safety</text>
      </g>

      <g transform="translate(560, 360)">
        <rect width="380" height="460" rx="20" fill="rgba(11,27,51,0.75)" stroke="rgba(255,255,255,0.12)"/>
        <circle cx="190" cy="90" r="45" fill="#E11D2E"/>
        <text x="190" y="104" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="34" text-anchor="middle">R</text>
        <text x="190" y="180" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">RESPONSE</text>
        <text x="190" y="240" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Gently tap shoulders:</text>
        <text x="190" y="280" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">"Can you hear me?"</text>
        <text x="190" y="320" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Look for eye response</text>
        <text x="190" y="390" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="18" text-anchor="middle">No response = UNCONSCIOUS</text>
      </g>

      <g transform="translate(980, 360)">
        <rect width="380" height="460" rx="20" fill="rgba(11,27,51,0.75)" stroke="rgba(255,255,255,0.12)"/>
        <circle cx="190" cy="90" r="45" fill="#E11D2E"/>
        <text x="190" y="104" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="34" text-anchor="middle">S</text>
        <text x="190" y="180" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">SEND FOR HELP</text>
        <text x="190" y="240" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Immediately call 1122.</text>
        <text x="190" y="280" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Put phone on speaker.</text>
        <text x="190" y="320" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Ask bystander for AED.</text>
        <text x="190" y="390" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="18" text-anchor="middle">State GPS coordinates</text>
      </g>

      <g transform="translate(1400, 360)">
        <rect width="380" height="460" rx="20" fill="rgba(11,27,51,0.75)" stroke="rgba(255,255,255,0.12)"/>
        <circle cx="190" cy="90" r="45" fill="#E11D2E"/>
        <text x="190" y="104" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="34" text-anchor="middle">B</text>
        <text x="190" y="180" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">BREATHING</text>
        <text x="190" y="240" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Tilt head &amp; lift chin.</text>
        <text x="190" y="280" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Look, listen, feel (10s).</text>
        <text x="190" y="320" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Agonal gasps != breathing.</text>
        <text x="190" y="390" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="18" text-anchor="middle">No breathing = START CPR</text>
      </g>
    </svg>`
  },

  // Slide 3: CPR In-Depth (11s - 18s)
  {
    duration: 7,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
      <rect width="100%" height="100%" fill="#040914"/>
      <!-- Watermark Logo -->
      <g transform="translate(80, 60) scale(0.9)">
        <polygon points="65,5 115,35 115,95 65,125 15,95 15,35" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round"/>
        <ellipse cx="65" cy="65" rx="46" ry="19" fill="none" stroke="#FFFFFF" stroke-width="6.5" transform="rotate(-28 65 65)"/>
        <circle cx="65" cy="65" r="13" fill="#E11D2E"/>
        <line x1="150" y1="20" x2="150" y2="110" stroke="#FFFFFF" stroke-width="3.5"/>
        <text x="180" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="44">AKATSUKI CORP</text>
        <text x="182" y="105" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="16" letter-spacing="6">YOU HEALTH OUR WAYS</text>
      </g>
      <rect x="1600" y="65" width="240" height="52" rx="26" fill="#E11D2E"/>
      <text x="1720" y="99" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">MODULE 2 / 5</text>

      <text x="960" y="230" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="46" text-anchor="middle">CARDIOPULMONARY RESUSCITATION (CPR)</text>
      <text x="960" y="285" fill="#FF4D5E" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">PUSH HARD &amp; FAST: 100 TO 120 COMPRESSIONS / MINUTE</text>

      <!-- Center CPR Box -->
      <g transform="translate(180, 350)">
        <rect width="740" height="520" rx="24" fill="rgba(11,27,51,0.85)" stroke="rgba(225,29,46,0.35)"/>
        <text x="370" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="28" text-anchor="middle">ADULT COMPRESSION TECHNIQUE</text>

        <text x="60" y="150" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="22">1. HAND POSITION:</text>
        <text x="60" y="190" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">Heel of dominant hand on center of chest (breastbone).</text>
        <text x="60" y="225" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">Interlock second hand on top. Lock elbows straight.</text>

        <text x="60" y="295" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="22">2. COMPRESSION DEPTH:</text>
        <text x="60" y="335" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">Compress 5 to 6 cm (2 to 2.4 inches) into chest.</text>
        <text x="60" y="370" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">Allow full chest recoil after every single push.</text>

        <text x="60" y="440" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="22">3. CYCLE &amp; CADENCE:</text>
        <text x="60" y="480" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">30 compressions followed by 2 gentle breaths (or hands-only).</text>
      </g>

      <g transform="translate(1000, 350)">
        <rect width="740" height="520" rx="24" fill="rgba(11,27,51,0.85)" stroke="rgba(255,255,255,0.12)"/>
        <text x="370" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="28" text-anchor="middle">CHILD &amp; INFANT CPR RULES</text>

        <text x="60" y="150" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="22">CHILDREN (1 TO PUBERTY):</text>
        <text x="60" y="190" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">Use 1 or 2 hands depending on size.</text>
        <text x="60" y="225" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">Compress about 5 cm (one-third chest depth).</text>

        <text x="60" y="295" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="22">INFANTS (UNDER 1 YEAR):</text>
        <text x="60" y="335" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">Use only 2 fingers in center of chest.</text>
        <text x="60" y="370" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">Compress about 4 cm. Cover mouth and nose with mouth.</text>

        <rect x="60" y="420" width="620" height="65" rx="14" fill="#E11D2E"/>
        <text x="370" y="460" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="22" text-anchor="middle">METRONOME RHYTHM: 110 BEATS PER MINUTE</text>
      </g>
    </svg>`
  },

  // Slide 4: Choking Relief (18s - 24s)
  {
    duration: 6,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
      <rect width="100%" height="100%" fill="#040914"/>
      <!-- Watermark Logo -->
      <g transform="translate(80, 60) scale(0.9)">
        <polygon points="65,5 115,35 115,95 65,125 15,95 15,35" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round"/>
        <ellipse cx="65" cy="65" rx="46" ry="19" fill="none" stroke="#FFFFFF" stroke-width="6.5" transform="rotate(-28 65 65)"/>
        <circle cx="65" cy="65" r="13" fill="#E11D2E"/>
        <line x1="150" y1="20" x2="150" y2="110" stroke="#FFFFFF" stroke-width="3.5"/>
        <text x="180" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="44">AKATSUKI CORP</text>
        <text x="182" y="105" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="16" letter-spacing="6">YOU HEALTH OUR WAYS</text>
      </g>
      <rect x="1600" y="65" width="240" height="52" rx="26" fill="#E11D2E"/>
      <text x="1720" y="99" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">MODULE 3 / 5</text>

      <text x="960" y="230" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="46" text-anchor="middle">AIRWAY OBSTRUCTION &amp; CHOKING RELIEF</text>
      <text x="960" y="285" fill="#FF4D5E" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">RECOGNIZE: CANNOT BREATHE, SPEAK, OR TURNS BLUE</text>

      <!-- Step 1 & Step 2 -->
      <g transform="translate(180, 360)">
        <rect width="740" height="490" rx="24" fill="rgba(11,27,51,0.85)" stroke="rgba(255,255,255,0.12)"/>
        <text x="370" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="30" text-anchor="middle">STEP 1: 5 FIRM BACK BLOWS</text>
        <text x="60" y="160" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">1. Lean the victim forward with head lower than chest.</text>
        <text x="60" y="210" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">2. Support upper body with one hand on chest.</text>
        <text x="60" y="260" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">3. Deliver up to 5 sharp, forceful blows with heel</text>
        <text x="90" y="300" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">of hand right between shoulder blades.</text>
        <rect x="60" y="370" width="620" height="70" rx="14" fill="rgba(225,29,46,0.2)" stroke="rgba(225,29,46,0.5)"/>
        <text x="370" y="414" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">Check mouth after each blow. Dislodge obstruction.</text>
      </g>

      <g transform="translate(1000, 360)">
        <rect width="740" height="490" rx="24" fill="rgba(11,27,51,0.85)" stroke="rgba(255,255,255,0.12)"/>
        <text x="370" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="30" text-anchor="middle">STEP 2: 5 ABDOMINAL THRUSTS</text>
        <text x="60" y="160" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">1. Stand behind victim and wrap arms around waist.</text>
        <text x="60" y="210" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">2. Make a fist: thumb side just above navel.</text>
        <text x="60" y="260" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">3. Grasp fist with other hand and pull sharply</text>
        <text x="90" y="300" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">inward and upward with quick thrusts.</text>
        <rect x="60" y="370" width="620" height="70" rx="14" fill="#E11D2E"/>
        <text x="370" y="414" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">Alternate 5 back blows &amp; 5 thrusts. Call 1122.</text>
      </g>
    </svg>`
  },

  // Slide 5: Severe Bleeding & Trauma (24s - 30s)
  {
    duration: 6,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
      <rect width="100%" height="100%" fill="#040914"/>
      <!-- Watermark Logo -->
      <g transform="translate(80, 60) scale(0.9)">
        <polygon points="65,5 115,35 115,95 65,125 15,95 15,35" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round"/>
        <ellipse cx="65" cy="65" rx="46" ry="19" fill="none" stroke="#FFFFFF" stroke-width="6.5" transform="rotate(-28 65 65)"/>
        <circle cx="65" cy="65" r="13" fill="#E11D2E"/>
        <line x1="150" y1="20" x2="150" y2="110" stroke="#FFFFFF" stroke-width="3.5"/>
        <text x="180" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="44">AKATSUKI CORP</text>
        <text x="182" y="105" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="16" letter-spacing="6">YOU HEALTH OUR WAYS</text>
      </g>
      <rect x="1600" y="65" width="240" height="52" rx="26" fill="#E11D2E"/>
      <text x="1720" y="99" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">MODULE 4 / 5</text>

      <text x="960" y="230" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="46" text-anchor="middle">SEVERE BLEEDING &amp; HEMORRHAGE CONTROL</text>
      <text x="960" y="285" fill="#FF4D5E" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">ACTION PROTOCOL: STOP MASSIVE BLOOD LOSS RAPIDLY</text>

      <!-- 3 Columns -->
      <g transform="translate(140, 360)">
        <rect width="500" height="490" rx="20" fill="rgba(11,27,51,0.8)" stroke="rgba(255,255,255,0.12)"/>
        <text x="250" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">1. DIRECT PRESSURE</text>
        <text x="50" y="150" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">• Wear protective gloves.</text>
        <text x="50" y="200" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">• Apply firm, uninterrupted direct</text>
        <text x="70" y="235" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">pressure using clean pad or gauze.</text>
        <text x="50" y="290" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">• Maintain pressure for at least</text>
        <text x="70" y="325" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">10 continuous minutes.</text>
        <rect x="40" y="390" width="420" height="60" rx="12" fill="rgba(225,29,46,0.2)"/>
        <text x="250" y="428" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="17" text-anchor="middle">Do not remove cloth to check wound</text>
      </g>

      <g transform="translate(710, 360)">
        <rect width="500" height="490" rx="20" fill="rgba(11,27,51,0.8)" stroke="rgba(255,255,255,0.12)"/>
        <text x="250" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">2. SECURE &amp; ELEVATE</text>
        <text x="50" y="150" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">• If blood soaks through, place</text>
        <text x="70" y="185" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">additional dressings on top.</text>
        <text x="50" y="240" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">• Elevate the injured extremity</text>
        <text x="70" y="275" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">above level of patient's heart.</text>
        <text x="50" y="330" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">• Secure firmly with roller bandage.</text>
        <rect x="40" y="390" width="420" height="60" rx="12" fill="rgba(225,29,46,0.2)"/>
        <text x="250" y="428" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="17" text-anchor="middle">Check fingers/toes for normal pulse</text>
      </g>

      <g transform="translate(1280, 360)">
        <rect width="500" height="490" rx="20" fill="rgba(11,27,51,0.8)" stroke="rgba(255,255,255,0.12)"/>
        <text x="250" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">3. CRITICAL WARNINGS</text>
        <text x="50" y="150" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-size="20">✕ NEVER remove embedded knife,</text>
        <text x="70" y="185" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-size="20">glass, or penetrating objects.</text>
        <text x="50" y="240" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20">• Pad around object and bandage.</text>
        <text x="50" y="290" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-size="20">✕ NO coffee, dirt, or home paste.</text>
        <rect x="40" y="390" width="420" height="60" rx="12" fill="#E11D2E"/>
        <text x="250" y="428" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="18" text-anchor="middle">Call 1122 for Immediate Transfusion</text>
      </g>
    </svg>`
  },

  // Slide 6: Burns & Shock Management (30s - 35s)
  {
    duration: 5,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
      <rect width="100%" height="100%" fill="#040914"/>
      <!-- Watermark Logo -->
      <g transform="translate(80, 60) scale(0.9)">
        <polygon points="65,5 115,35 115,95 65,125 15,95 15,35" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round"/>
        <ellipse cx="65" cy="65" rx="46" ry="19" fill="none" stroke="#FFFFFF" stroke-width="6.5" transform="rotate(-28 65 65)"/>
        <circle cx="65" cy="65" r="13" fill="#E11D2E"/>
        <line x1="150" y1="20" x2="150" y2="110" stroke="#FFFFFF" stroke-width="3.5"/>
        <text x="180" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="44">AKATSUKI CORP</text>
        <text x="182" y="105" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="16" letter-spacing="6">YOU HEALTH OUR WAYS</text>
      </g>
      <rect x="1600" y="65" width="240" height="52" rx="26" fill="#E11D2E"/>
      <text x="1720" y="99" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">MODULE 5 / 5</text>

      <text x="960" y="230" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="46" text-anchor="middle">THERMAL BURNS &amp; SHOCK MANAGEMENT</text>
      <text x="960" y="285" fill="#FF4D5E" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="26" text-anchor="middle">RAPID COOLING · TISSUE PRESERVATION · SHOCK DEFENSE</text>

      <g transform="translate(180, 360)">
        <rect width="740" height="490" rx="24" fill="rgba(11,27,51,0.85)" stroke="rgba(255,255,255,0.12)"/>
        <text x="370" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="30" text-anchor="middle">BURN CARE (RULE OF 20)</text>
        <text x="60" y="160" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">1. Cool under clean running water for 20 minutes.</text>
        <text x="60" y="210" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">2. Remove tight clothing &amp; rings before swelling.</text>
        <text x="60" y="260" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">3. Cover loosely with sterile plastic cling film.</text>
        <text x="60" y="310" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-size="22">✕ DO NOT use ice, butter, oil, or toothpaste.</text>
        <rect x="60" y="370" width="620" height="70" rx="14" fill="rgba(225,29,46,0.2)"/>
        <text x="370" y="414" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">Never puncture blisters or tear stuck cloth</text>
      </g>

      <g transform="translate(1000, 360)">
        <rect width="740" height="490" rx="24" fill="rgba(11,27,51,0.85)" stroke="rgba(255,255,255,0.12)"/>
        <text x="370" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="30" text-anchor="middle">MEDICAL SHOCK DEFENSE</text>
        <text x="60" y="160" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">1. Signs: Pale cold clammy skin, fast weak pulse.</text>
        <text x="60" y="210" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">2. Lay patient flat and elevate legs 30 cm.</text>
        <text x="60" y="260" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="22">3. Cover with blanket to prevent hypothermia.</text>
        <text x="60" y="310" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-size="22">✕ DO NOT give food, water, or medicines.</text>
        <rect x="60" y="370" width="620" height="70" rx="14" fill="#E11D2E"/>
        <text x="370" y="414" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">Roll unconscious breathing patient to Recovery Position</text>
      </g>
    </svg>`
  },

  // Slide 7: Outro with Grand Logo (35s - 40s)
  {
    duration: 5,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
      <defs>
        <radialGradient id="outGlow" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#142C5B"/>
          <stop offset="100%" stop-color="#040914"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#outGlow)"/>

      <!-- Center Grand Akatsuki Logo Lockup -->
      <g transform="translate(560, 240)">
        <polygon points="100,10 185,58 185,155 100,203 15,155 15,58" fill="none" stroke="#FFFFFF" stroke-width="16" stroke-linejoin="round"/>
        <ellipse cx="100" cy="106" rx="74" ry="30" fill="none" stroke="#FFFFFF" stroke-width="10" transform="rotate(-28 100 106)"/>
        <circle cx="100" cy="106" r="20" fill="#E11D2E"/>

        <line x1="230" y1="24" x2="230" y2="186" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>

        <text x="275" y="112" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="70" letter-spacing="5">AKATSUKI CORP</text>
        <text x="280" y="168" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="24" letter-spacing="10">YOU HEALTH OUR WAYS</text>
      </g>

      <text x="960" y="580" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="44" text-anchor="middle" letter-spacing="3">AKATSUKI FIRST AID INITIATIVE</text>
      <text x="960" y="640" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="28" text-anchor="middle">Simple Emergency Help in Seconds · Always Ready</text>
      <text x="960" y="700" fill="#8499B8" font-family="'DejaVu Sans', sans-serif" font-size="22" text-anchor="middle">In any life-threatening situation, stay calm and call emergency rescue.</text>

      <g transform="translate(710, 780)">
        <rect width="500" height="74" rx="37" fill="#E11D2E"/>
        <text x="250" y="47" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="28" text-anchor="middle" letter-spacing="2">DIAL 1122 FOR AMBULANCE</text>
      </g>
    </svg>`
  }
];

console.log('Rendering 7 high-res slides to PNG (1920x1080)...');
slides.forEach((s, idx) => {
  const svgPath = path.join(frameDir, `slide_${idx}.svg`);
  const pngPath = path.join(frameDir, `slide_${idx}.png`);
  fs.writeFileSync(svgPath, s.svg.trim());
  execSync(`ffmpeg -y -i "${svgPath}" -vframes 1 "${pngPath}"`);
});

// Build concat file for 40 seconds total
let concatText = '';
slides.forEach((s, idx) => {
  const pngPath = path.join(frameDir, `slide_${idx}.png`);
  concatText += `file '${pngPath}'\nduration ${s.duration}\n`;
});
concatText += `file '${path.join(frameDir, `slide_${slides.length - 1}.png`)}'\n`;
fs.writeFileSync(path.join(frameDir, 'concat.txt'), concatText);

const audioPath = path.join(__dirname, 'public', 'proper_music_soundtrack.wav');
const outputPath = path.join(__dirname, 'public', 'akatsuki_first_aid_guide.mp4');

console.log('Encoding 40s video with rich musical soundtrack to:', outputPath);
execSync(`ffmpeg -y -f concat -safe 0 -i "${path.join(frameDir, 'concat.txt')}" -i "${audioPath}" -c:v libx264 -pix_fmt yuv420p -r 25 -c:a aac -b:a 192k -shortest "${outputPath}"`);

// Also copy to root and dist
fs.copyFileSync(outputPath, path.join(__dirname, 'akatsuki_first_aid_guide.mp4'));
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.copyFileSync(outputPath, path.join(distDir, 'akatsuki_first_aid_guide.mp4'));
}

console.log('Proper 40s Video Successfully Generated! Size:', fs.statSync(outputPath).size);
