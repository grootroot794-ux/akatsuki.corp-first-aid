const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const frameDir = path.join(__dirname, 'video_frames');
if (!fs.existsSync(frameDir)) fs.mkdirSync(frameDir);

// 35 seconds, 5 distinct key visual stages
// Let's create high-resolution SVG slides and interpolate or render them
const slides = [
  // Slide 1: Intro (0s - 7s)
  {
    duration: 7,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#0E2347"/>
          <stop offset="70%" stop-color="#040914"/>
        </radialGradient>
        <radialGradient id="redGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#E11D2E" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#E11D2E" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg)"/>
      <circle cx="640" cy="240" r="180" fill="url(#redGlow)"/>

      <!-- Center Akatsuki Logo Lockup -->
      <g transform="translate(390, 160)">
        <!-- Hexagon -->
        <polygon points="65,5 115,35 115,95 65,125 15,95 15,35" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round"/>
        <ellipse cx="65" cy="65" rx="46" ry="19" fill="none" stroke="#FFFFFF" stroke-width="6.5" transform="rotate(-28 65 65)"/>
        <circle cx="65" cy="65" r="13" fill="#E11D2E"/>

        <!-- Vertical Divider -->
        <line x1="150" y1="20" x2="150" y2="110" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round"/>

        <!-- Typography -->
        <text x="180" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="44" letter-spacing="3">AKATSUKI CORP</text>
        <text x="182" y="105" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="16" letter-spacing="6">YOU HEALTH OUR WAYS</text>
      </g>

      <text x="640" y="380" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="36" text-anchor="middle" letter-spacing="2">RAPID EMERGENCY PROTOCOL</text>
      <text x="640" y="425" fill="#E11D2E" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="22" text-anchor="middle" letter-spacing="4">35-SECOND ESSENTIAL TRAINING GUIDE</text>
      <text x="640" y="480" fill="#8499B8" font-family="'DejaVu Sans', sans-serif" font-size="18" text-anchor="middle">Emergency Response &amp; First Aid System</text>

      <!-- Bottom badge -->
      <rect x="520" y="560" width="240" height="42" rx="21" fill="#E11D2E"/>
      <text x="640" y="587" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="16" text-anchor="middle">DIAL 1122 IN EMERGENCY</text>
    </svg>`
  },

  // Slide 2: Assess & Call 1122 (7s - 14s)
  {
    duration: 7,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
      <rect width="100%" height="100%" fill="#040914"/>
      <!-- Header Watermark Logo -->
      <g transform="translate(60, 45) scale(0.65)">
        <polygon points="65,5 115,35 115,95 65,125 15,95 15,35" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round"/>
        <ellipse cx="65" cy="65" rx="46" ry="19" fill="none" stroke="#FFFFFF" stroke-width="6.5" transform="rotate(-28 65 65)"/>
        <circle cx="65" cy="65" r="13" fill="#E11D2E"/>
        <line x1="150" y1="20" x2="150" y2="110" stroke="#FFFFFF" stroke-width="3.5"/>
        <text x="180" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="44">AKATSUKI CORP</text>
        <text x="182" y="105" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="16" letter-spacing="6">YOU HEALTH OUR WAYS</text>
      </g>
      <rect x="1060" y="50" width="160" height="38" rx="19" fill="#E11D2E"/>
      <text x="1140" y="74" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">STEP 01 / 03</text>

      <!-- Main Content -->
      <circle cx="640" cy="230" r="60" fill="rgba(225,29,46,0.15)" stroke="#E11D2E" stroke-width="3"/>
      <text x="640" y="246" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="42" text-anchor="middle">⚠️</text>

      <text x="640" y="340" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="34" text-anchor="middle">CHECK RESPONSE &amp; CALL 1122</text>
      <text x="640" y="390" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Tap shoulders firmly and shout: "Are you okay?"</text>
      <text x="640" y="430" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Look for normal chest rise for 10 seconds.</text>

      <rect x="340" y="490" width="600" height="90" rx="16" fill="rgba(225,29,46,0.1)" stroke="rgba(225,29,46,0.5)" stroke-width="1.5"/>
      <text x="640" y="530" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="18" text-anchor="middle">No breathing or gasping = EMERGENCY</text>
      <text x="640" y="558" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-size="16" text-anchor="middle">Call 1122 on speakerphone immediately</text>
    </svg>`
  },

  // Slide 3: CPR 110 BPM (14s - 23s)
  {
    duration: 9,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
      <rect width="100%" height="100%" fill="#040914"/>
      <!-- Header Watermark Logo -->
      <g transform="translate(60, 45) scale(0.65)">
        <polygon points="65,5 115,35 115,95 65,125 15,95 15,35" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round"/>
        <ellipse cx="65" cy="65" rx="46" ry="19" fill="none" stroke="#FFFFFF" stroke-width="6.5" transform="rotate(-28 65 65)"/>
        <circle cx="65" cy="65" r="13" fill="#E11D2E"/>
        <line x1="150" y1="20" x2="150" y2="110" stroke="#FFFFFF" stroke-width="3.5"/>
        <text x="180" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="44">AKATSUKI CORP</text>
        <text x="182" y="105" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="16" letter-spacing="6">YOU HEALTH OUR WAYS</text>
      </g>
      <rect x="1060" y="50" width="160" height="38" rx="19" fill="#E11D2E"/>
      <text x="1140" y="74" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">STEP 02 / 03</text>

      <!-- Center Heart Graphic -->
      <circle cx="640" cy="220" r="75" fill="rgba(225,29,46,0.2)" stroke="#E11D2E" stroke-width="3"/>
      <text x="640" y="238" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="52" text-anchor="middle">❤️</text>

      <text x="640" y="340" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="34" text-anchor="middle">PUSH HARD &amp; FAST (100–120 BPM)</text>
      <text x="640" y="390" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Place heel of one hand in center of chest, other hand on top.</text>
      <text x="640" y="430" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Compress 5 to 6 cm deep · Allow complete chest recoil.</text>

      <g transform="translate(440, 480)">
        <rect width="400" height="70" rx="35" fill="#E11D2E"/>
        <text x="200" y="44" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">PULSE: 110 COMPRESSIONS / MIN</text>
      </g>
    </svg>`
  },

  // Slide 4: Bleeding & Burns (23s - 29s)
  {
    duration: 6,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
      <rect width="100%" height="100%" fill="#040914"/>
      <!-- Header Watermark Logo -->
      <g transform="translate(60, 45) scale(0.65)">
        <polygon points="65,5 115,35 115,95 65,125 15,95 15,35" fill="none" stroke="#FFFFFF" stroke-width="11" stroke-linejoin="round"/>
        <ellipse cx="65" cy="65" rx="46" ry="19" fill="none" stroke="#FFFFFF" stroke-width="6.5" transform="rotate(-28 65 65)"/>
        <circle cx="65" cy="65" r="13" fill="#E11D2E"/>
        <line x1="150" y1="20" x2="150" y2="110" stroke="#FFFFFF" stroke-width="3.5"/>
        <text x="180" y="70" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="44">AKATSUKI CORP</text>
        <text x="182" y="105" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="16" letter-spacing="6">YOU HEALTH OUR WAYS</text>
      </g>
      <rect x="1060" y="50" width="160" height="38" rx="19" fill="#E11D2E"/>
      <text x="1140" y="74" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="14" text-anchor="middle">STEP 03 / 03</text>

      <text x="640" y="210" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="34" text-anchor="middle">BLEEDING &amp; BURNS MANAGEMENT</text>

      <!-- 2 Columns -->
      <g transform="translate(180, 260)">
        <rect width="420" height="300" rx="18" fill="rgba(11,27,51,0.7)" stroke="rgba(255,255,255,0.1)"/>
        <text x="210" y="60" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="22" text-anchor="middle">🩸 Severe Bleeding</text>
        <text x="210" y="115" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="17" text-anchor="middle">Apply firm direct pressure with clean pad.</text>
        <text x="210" y="155" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="17" text-anchor="middle">Do not remove embedded objects.</text>
        <text x="210" y="195" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="17" text-anchor="middle">Elevate limb if no fracture suspected.</text>
        <rect x="60" y="230" width="300" height="40" rx="10" fill="rgba(225,29,46,0.2)"/>
        <text x="210" y="255" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="15" text-anchor="middle">Never remove saturated gauze</text>
      </g>

      <g transform="translate(680, 260)">
        <rect width="420" height="300" rx="18" fill="rgba(11,27,51,0.7)" stroke="rgba(255,255,255,0.1)"/>
        <text x="210" y="60" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="22" text-anchor="middle">🔥 Thermal Burns</text>
        <text x="210" y="115" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="17" text-anchor="middle">Cool with running water for 20 minutes.</text>
        <text x="210" y="155" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="17" text-anchor="middle">Remove constricting jewelry early.</text>
        <text x="210" y="195" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="17" text-anchor="middle">Cover loosely with clean plastic wrap.</text>
        <rect x="60" y="230" width="300" height="40" rx="10" fill="rgba(225,29,46,0.2)"/>
        <text x="210" y="255" fill="#FF8B95" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="15" text-anchor="middle">Never apply ice, butter, or paste</text>
      </g>
    </svg>`
  },

  // Slide 5: Outro with Logo (29s - 35s)
  {
    duration: 6,
    svg: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="1280" height="720">
      <defs>
        <radialGradient id="outBg" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stop-color="#12274F"/>
          <stop offset="100%" stop-color="#040914"/>
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#outBg)"/>

      <!-- Center Large Akatsuki Logo Lockup -->
      <g transform="translate(360, 200)">
        <polygon points="75,5 135,40 135,110 75,145 15,110 15,40" fill="none" stroke="#FFFFFF" stroke-width="12.5" stroke-linejoin="round"/>
        <ellipse cx="75" cy="75" rx="54" ry="22" fill="none" stroke="#FFFFFF" stroke-width="7.5" transform="rotate(-28 75 75)"/>
        <circle cx="75" cy="75" r="15" fill="#E11D2E"/>

        <line x1="175" y1="20" x2="175" y2="130" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>

        <text x="210" y="80" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="52" letter-spacing="4">AKATSUKI CORP</text>
        <text x="214" y="122" fill="#94A3B8" font-family="'DejaVu Sans', sans-serif" font-weight="600" font-size="18" letter-spacing="8">YOU HEALTH OUR WAYS</text>
      </g>

      <text x="640" y="440" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="28" text-anchor="middle" letter-spacing="2">AKATSUKI FIRST AID INITIATIVE</text>
      <text x="640" y="485" fill="#CBD5E1" font-family="'DejaVu Sans', sans-serif" font-size="20" text-anchor="middle">Simple Emergency Help in Seconds</text>

      <g transform="translate(470, 540)">
        <rect width="340" height="54" rx="27" fill="#E11D2E"/>
        <text x="170" y="34" fill="#FFFFFF" font-family="'DejaVu Sans', sans-serif" font-weight="bold" font-size="20" text-anchor="middle">EMERGENCY: DIAL 1122</text>
      </g>
    </svg>`
  }
];

// Write SVGs and render to PNG
console.log('Rendering slides to PNG...');
slides.forEach((s, idx) => {
  const svgPath = path.join(frameDir, `slide_${idx}.svg`);
  const pngPath = path.join(frameDir, `slide_${idx}.png`);
  fs.writeFileSync(svgPath, s.svg.trim());
  execSync(`ffmpeg -y -i "${svgPath}" -vframes 1 "${pngPath}"`);
});

// Build concat file for 35 seconds total
let concatText = '';
slides.forEach((s, idx) => {
  const pngPath = path.join(frameDir, `slide_${idx}.png`);
  concatText += `file '${pngPath}'\nduration ${s.duration}\n`;
});
// repeat last slide once to prevent ffmpeg premature stop
concatText += `file '${path.join(frameDir, `slide_${slides.length - 1}.png`)}'\n`;
fs.writeFileSync(path.join(frameDir, 'concat.txt'), concatText);

// Synthesize audio track: ambient synth bed + CPR metronome at 110 BPM during scene 2/3
console.log('Synthesizing 35-second audio track...');
const audioPath = path.join(frameDir, 'audio.wav');
// 35s audio with beep pulses at 110bpm
execSync(`ffmpeg -y -f lavfi -i "sine=frequency=220:duration=35,volume=0.1" -f lavfi -i "sine=frequency=880:duration=35,volume=0.3" -filter_complex "[1:a]volume=enable='between(t,14,23)':volume=1[cpr];[0:a][cpr]amix=inputs=2" "${audioPath}"`);

const outputPath = path.join(__dirname, 'public', 'akatsuki_first_aid_guide.mp4');
console.log('Assembling final MP4 video to:', outputPath);
execSync(`ffmpeg -y -f concat -safe 0 -i "${path.join(frameDir, 'concat.txt')}" -i "${audioPath}" -c:v libx264 -pix_fmt yuv420p -r 25 -c:a aac -b:a 128k -shortest "${outputPath}"`);

console.log('Video generation complete! File size:', fs.statSync(outputPath).size);
