/**
 * Challenge category data — the single source for both the homepage flip-card
 * grid and the nine per-discipline landing pages under /categories.
 *
 * `Miscellaneous` deliberately has no slug: it is a catch-all bucket rather than
 * a discipline, and giving it a thin page would only dilute the site.
 */

export type CategoryFace = {
  title: string
  body: string
}

export type Category = {
  slug: string
  name: string
  /** Key into `categoryIcons` in lib/category-icons.ts. */
  icon: string
  /** One line, reused as the flip-card back face on the homepage. */
  tagline: string
  /** Page <title>. */
  seoTitle: string
  /** Page meta description, ~155 characters. */
  seoDescription: string
  keywords: string[]
  /** Opening paragraphs, rendered under the page heading. */
  intro: string[]
  /** "What you'll actually face" card grid. */
  faces: CategoryFace[]
  tools: string[]
  prepare: string[]
  related: string[]
}

export const categories: Category[] = [
  {
    slug: 'web-exploitation',
    name: 'Web Exploitation',
    icon: 'Globe2',
    tagline: 'SQLi, XSS, SSRF, auth bypass & server-side payloads.',
    seoTitle: 'Web Exploitation CTF Challenges',
    seoDescription:
      'Web exploitation CTF challenges covering SQL injection, XSS, SSRF, auth bypass and server-side vulnerabilities. Free student CTF by Cyber Invaders, NIET Greater Noida.',
    keywords: [
      'web exploitation ctf',
      'web exploitation challenges',
      'sql injection ctf',
      'xss challenges',
      'ssrf ctf',
      'authentication bypass ctf',
      'owasp top 10 practice',
      'web security challenges for students',
      'burp suite ctf',
      'web app pentesting practice',
      'ctf web challenges india',
    ],
    intro: [
      'Web exploitation is the discipline that most closely mirrors the work of an application security engineer. Targets are deliberately vulnerable web applications — custom-built for the competition or pulled from well-known public vulnerable labs — and your job is to find the flaw in how the application handles untrusted input, then turn that flaw into access you were never meant to have.',
      'The mental model is consistent across every web challenge: input arrives, gets processed, and something about that process can be bent. A string that reaches a database query unescaped becomes SQL injection. A value reflected into a page without encoding becomes cross-site scripting. A server that fetches a URL you control becomes server-side request forgery. Learning web exploitation means learning to spot those seams and to know which tool tells you what.',
      'Expect these challenges to punish surface-level scanning. A directory brute-force and a stock payload will get you exactly as far as they always do in a real engagement — nowhere. The scoring here rewards reading how the application behaves: noticing that a JSON field is concatenated into a shell command, or that an admin endpoint checks a cookie you can simply set yourself.',
    ],
    faces: [
      {
        title: 'Injection flaws',
        body: 'SQL injection across stacked and blind variants, NoSQL injection, command injection and LDAP injection — where unescaped input reaches an interpreter and executes as code.',
      },
      {
        title: 'Cross-site scripting',
        body: 'Reflected, stored and DOM-based XSS, with realistic sinks: search fields, profile inputs, URL fragments and JSON responses reflected straight into client-side JavaScript.',
      },
      {
        title: 'Access control',
        body: 'IDOR through predictable identifiers, broken object-level authorisation, insecure direct object references and privilege escalation from a low-privilege account.',
      },
      {
        title: 'Server-side request forgery',
        body: 'Servers that fetch attacker-supplied URLs — including a cloud metadata endpoint in the final stages — turning an outbound request into a credential theft primitive.',
      },
      {
        title: 'Authentication & session',
        body: 'Weak session handling, predictable password resets, forgeable tokens and login flows that can be bypassed by editing a single request header.',
      },
      {
        title: 'Logic & race conditions',
        body: 'Discount stacking, negative-quantity purchases, race conditions between competing requests and business rules that were never written to be enforced.',
      },
    ],
    tools: [
      'Burp Suite Community',
      'sqlmap',
      'curl',
      'ffuf',
      'wfuzz',
      'Browser DevTools',
      'Python requests',
      'Hashcat / John',
    ],
    prepare: [
      'Work through PortSwigger Web Security Academy end to end — it is free, structured, and maps almost one-to-one onto what the category tests.',
      'Set up a local lab with intentionally broken apps: DVWA, Juice Shop and WebGoat. Break them by hand before you try to break a timed challenge.',
      'Learn to read application source. Most web challenges ship a snippet, a config or a comment; the vulnerability is nearly always visible once you know where to look.',
      'Get fast at reading Burp output — repeater, intruder and the request/response diff are where the actual work happens.',
      'Memorise the handful of payloads that matter: a boolean SQLi test, a basic reflected-XSS tag, an SSRF probe, and a JWT `alg: none` variant.',
    ],
    related: ['cryptography', 'cloud-security', 'steganography'],
  },
  {
    slug: 'cryptography',
    name: 'Cryptography',
    icon: 'KeyRound',
    tagline: 'Classical, symmetric, asymmetric & PGP challenges.',
    seoTitle: 'Cryptography CTF Challenges',
    seoDescription:
      'Cryptography CTF challenges on classical ciphers, RSA, symmetric keys, hashing and PGP. Learn to break broken crypto in a free student CTF by Cyber Invaders, NIET.',
    keywords: [
      'cryptography ctf',
      'crypto challenges',
      'rsa challenge ctf',
      'breaking rsa',
      'classical cipher challenge',
      'vigenere cipher practice',
      'hash cracking ctf',
      'aes ecb attack',
      'pgp challenge ctf',
      'learn cryptography through ctf',
      'crypto puzzles for students',
    ],
    intro: [
      'Cryptography challenges rarely require you to invent a new attack. They require you to notice that a system is using a construction it should not be, and then apply a known weakness to it. The skill being tested is recognising which guarantee a cipher is actually providing — and which one it is quietly not.',
      'The category spans the full range of practical crypto: classical ciphers where the weakness is in the algorithm, modern symmetric and asymmetric schemes where the weakness is in the implementation or the parameters, and public-key infrastructure tasks where the weakness is in how keys and signatures are handled. You will be expected to write code to solve these — Python with `pycryptodome` or `sympy` covers almost everything you will meet.',
      'What makes this category rewarding is that the reasoning is fully self-contained. There is no environment to explore and no traffic to capture. You have the ciphertext, the algorithm, and enough time to work it out — and the moment you spot the flaw, the solve is usually twenty lines of code.',
    ],
    faces: [
      {
        title: 'Classical ciphers',
        body: 'Vigenère, substitution and transposition ciphers broken by frequency analysis, Kasiski examination or crib dragging rather than by brute force.',
      },
      {
        title: 'RSA and public-key',
        body: 'Shared primes, small exponents, textbook padding, faulty signature checks and key-recovery attacks where the modulus leaks through timing or randomness.',
      },
      {
        title: 'Symmetric ciphers',
        body: 'AES in ECB mode, reused nonces, short keys and known-plaintext attacks against block ciphers used outside the way they were designed for.',
      },
      {
        title: 'Hashing & password security',
        body: 'Weak hash functions, unsalted digests, length-extension attacks and password hashes that can be attacked faster than brute force.',
      },
      {
        title: 'PGP & key handling',
        body: 'Key generation with poor entropy, messages encrypted to the wrong key, detached signatures that can be stripped or replayed.',
      },
      {
        title: 'Encoding traps',
        body: 'Base64, hex and custom encodings that look like security but provide none, layered over a real cipher that does the actual work.',
      },
    ],
    tools: [
      'Python + pycryptodome',
      'SymPy',
      'SageMath',
      'hashcat / John the Ripper',
      'GnuPG',
      'CyberChef',
      'RsaCtfTool',
      'z3 solver',
    ],
    prepare: [
      'Actually implement AES, RSA and a Vigenère cipher from scratch in Python. Writing them is what makes recognising their misuse automatic.',
      'Learn to factor small integers quickly and to read `n`, `e`, `c` triples without hesitation — you will be doing it under a clock.',
      'Understand padding: PKCS#7, OAEP and ECB-vs-CBC. Most symmetric challenge solves are a padding or mode mistake in disguise.',
      'Practise reading `sympy` output and using `discrete_log` when a challenge hands you a small group.',
      'Keep a scratch file of the ten solves you have done before. Crypto is the one category where muscle memory pays off most.',
    ],
    related: ['reverse-engineering', 'steganography', 'web-exploitation'],
  },
  {
    slug: 'digital-forensics',
    name: 'Digital Forensics',
    icon: 'Fingerprint',
    tagline: 'Disk, memory, disk image & timeline triage.',
    seoTitle: 'Digital Forensics CTF Challenges',
    seoDescription:
      'Digital forensics CTF challenges on disk images, memory dumps, network captures and timeline reconstruction. Free student CTF by Cyber Invaders, NIET Greater Noida.',
    keywords: [
      'digital forensics ctf',
      'forensics challenges',
      'disk image analysis',
      'memory forensics challenge',
      'pcap analysis ctf',
      'file carving',
      'timeline reconstruction',
      'forensic investigation challenges',
      'volatility memory dump',
      'exif data forensics',
      'learn forensics through ctf',
    ],
    intro: [
      'Digital forensics is the one category where you are not attacking a system — you are reconstructing one after the fact. A disk image, a memory dump or a packet capture lands in front of you, and your job is to work out what happened, who did it and when, then prove it with the artefact that proves it.',
      'The core discipline is triage under time pressure. Real forensic work is about deciding what to look at first: timestamps that do not agree, a file with a suspiciously empty metadata block, an executable nobody remembers installing. The competitors who score fastest are the ones who build a reliable routine and refuse to abandon it under pressure.',
      'Tools do a lot of the heavy lifting here. Autopsy, Sleuth Kit, Volatility, Wireshark, binwalk and foremost will surface most of what you need. The skill that matters is knowing which one to reach for, and reading its output critically enough to know when it has found nothing.',
    ],
    faces: [
      {
        title: 'Disk & filesystem',
        body: 'Partition tables, deleted file recovery, unallocated space, alternate data streams, journal artefacts and files that were renamed rather than deleted.',
      },
      {
        title: 'Memory forensics',
        body: 'Process and network state recovered from a RAM dump: running processes, injected code, open handles, credentials and injected shellcode in memory.',
      },
      {
        title: 'Network analysis',
        body: 'PCAP files reassembled into sessions — reconstructing a web request, spotting data exfiltration over DNS, or identifying a command-and-control channel.',
      },
      {
        title: 'Timeline reconstruction',
        body: 'Correlating timestamps across artefacts to answer "when did this happen", where file times, log entries and registry keys disagree with one another.',
      },
      {
        title: 'Embedded & hidden data',
        body: 'Data appended after the end of a file, buried in slack space, hidden in image metadata or packed inside another container that the header does not describe.',
      },
      {
        title: 'Log & registry analysis',
        body: 'Windows event logs, browser history and caches, and registry keys that record user actions no other artefact captured.',
      },
    ],
    tools: [
      'Autopsy / The Sleuth Kit',
      'Volatility 3',
      'Wireshark & tshark',
      'binwalk',
      'foremost',
      'ExifTool',
      'FTK Imager',
      'strings / xxd',
    ],
    prepare: [
      'Build a Volidity 3 workflow end to end on a practice image: plugins list, process listing, network scan, file dump. Speed beats novelty in this category.',
      'Learn to read a hex dump by hand for the first few bytes. File signatures are the fastest way to identify a carved artefact.',
      'Practise timeline questions specifically — most challenges ultimately ask "when" or "in what order".',
      'Get comfortable with `tshark` field filters so you can isolate a conversation instead of scrolling through thousands of packets.',
      'Do at least one full forensic writeup end to end. It forces you to record what you examined, which is exactly the discipline the category rewards.',
    ],
    related: ['osint', 'steganography', 'reverse-engineering'],
  },
  {
    slug: 'reverse-engineering',
    name: 'Reverse Engineering',
    icon: 'Binary',
    tagline: 'Static/dynamic analysis & binary deobfuscation.',
    seoTitle: 'Reverse Engineering CTF Challenges',
    seoDescription:
      'Reverse engineering CTF challenges on binary analysis, deobfuscation, malware triage and crackmes. Free student CTF by Cyber Invaders, NIET Greater Noida.',
    keywords: [
      'reverse engineering ctf',
      'reverse engineering challenges',
      'binary analysis ctf',
      'crackme challenges',
      'deobfuscation',
      'malware analysis practice',
      'ghidra tutorials',
      'assembly language ctf',
      'static binary analysis',
      'learn reverse engineering',
      'crackmes for students',
    ],
    intro: [
      'Reverse engineering is the practice of taking a compiled artefact and recovering what it does. In a CTF context the artefact is usually a stripped Linux ELF binary or a Windows executable that hides a flag behind some logic: a comparison you have to satisfy, an encryption routine you have to break, or control flow that has been deliberately twisted so a decompiler renders it as gibberish.',
      'The skill being tested is patience plus structure. Nobody reverses a 4 MB binary by reading it top to bottom. You probe it first — run it, see what it does, feed it inputs and watch what changes — then narrow to the function that matters and only then start reading carefully. Good reversers form a hypothesis, test it cheaply, and discard it just as fast.',
      'You do not need to be an expert to score here. A working knowledge of x86-64 calling conventions, the C runtime library and common compiler idioms covers most of what a mid-difficulty challenge asks for.',
    ],
    faces: [
      {
        title: 'Flag checks',
        body: 'The classic form: a routine compares your input against a transformed value. You recover the transformation, invert it, and recover the flag.',
      },
      {
        title: 'Obfuscated control flow',
        body: 'Opaque predicates, flattened dispatch tables and switch tables inserted specifically to defeat decompilers, requiring manual reconstruction of the real logic.',
      },
      {
        title: 'Packed and encrypted payloads',
        body: 'Binaries whose meaningful code is unpacked at runtime, so static analysis shows a stub. You need to dump the process after the unpacking stage completes.',
      },
      {
        title: 'Anti-analysis',
        body: 'Timing checks, debugger detection and environment probes that must be identified and bypassed before the real logic will run.',
      },
      {
        title: 'Embedded data',
        body: 'Flags or keys embedded as byte arrays, decoded by a small routine buried somewhere in a large binary. The reverse part is locating the decoder.',
      },
      {
        title: 'Algorithm reimplementation',
        body: 'Custom hash, compression or cipher routines you must reimplement in another language to compute a comparison value or decrypt a blob.',
      },
    ],
    tools: [
      'Ghidra',
      'IDA Free',
      'radare2 / rizin',
      'GDB & pwndbg',
      'strace / ltrace',
      'x64dbg (Windows)',
      'Frida',
      'Python + capstone / pyelftools',
    ],
    prepare: [
      'Complete a Ghidra course — the "Intro to Reverse Engineering" free course from the training.github.com Ghidra track is the right starting point.',
      'Learn enough x86-64 to read a decompiled function without flinching: calling convention, stack frame, and what `rbp`-relative reads mean.',
      'Always run the binary first. Even when it does nothing useful, `strings`, its dynamic dependencies and its runtime behaviour tell you what to decompile.',
      'Practise on crackmes.one from easy to medium. There is no substitute for the first twenty binaries.',
      'Learn the handful of Ghidra shortcuts that matter — rename, retype, force-integer — because manual naming is what makes a function readable.',
    ],
    related: ['cryptography', 'pwn', 'digital-forensics'],
  },
  {
    slug: 'osint',
    name: 'OSINT',
    icon: 'Search',
    tagline: 'Open-source intel gathering from public sources.',
    seoTitle: 'OSINT CTF Challenges',
    seoDescription:
      'OSINT CTF challenges on geolocation, metadata, username hunting, archived pages and public-record research. Free student CTF by Cyber Invaders, NIET.',
    keywords: [
      'osint ctf',
      'osint challenges',
      'open source intelligence ctf',
      'geolocation challenge',
      'reverse image search ctf',
      'username enumeration',
      'wayback machine investigation',
      'metadata osint',
      'osint techniques for beginners',
      'people search osint',
      'digital footprint investigation',
    ],
    intro: [
      'OSINT challenges are built from information that is genuinely public — a photo with its metadata intact, a username reused across platforms, a screenshot geolocatable from signage and shadows. Nothing is hidden behind a vulnerability; the entire difficulty is in knowing where to look and how to connect what you find.',
      'This is the category with the lowest entry barrier and the highest ratio of thinking to tooling. A clever OSINT solve often takes two minutes of insight and zero lines of code. The failure mode is brute-forcing tool after tool when the answer was sitting in one overlooked field.',
      'It is also the most transferable skill on the board. The same workflow — narrow the frame, enumerate systematically, verify before you conclude — is what professional intelligence work looks like.',
    ],
    faces: [
      {
        title: 'Metadata extraction',
        body: 'EXIF data from images, document properties, PDF metadata and camera serial numbers that identify a device, a location or a photographer.',
      },
      {
        title: 'Geolocation',
        body: 'Fixing a position from visual evidence: signage, road markings, terrain, sun position, weather, licence plates and architectural style.',
      },
      {
        title: 'Username & account hunting',
        body: 'Tracing one handle across platforms using archived pages, cached profiles and search operators, then confirming an identity from what they have in common.',
      },
      {
        title: 'Archived web content',
        body: 'Recovering pages from the Wayback Machine to expose information the live site has since removed, or to date when something was published.',
      },
      {
        title: 'Public record research',
        body: 'Company registries, professional listings, public tender records and academic papers used to confirm or refute a claimed affiliation.',
      },
      {
        title: 'Data aggregation',
        body: 'Several weak public sources combining into one strong conclusion — a common correlation a visual check alone would not have caught.',
      },
    ],
    tools: [
      'ExifTool',
      'Google advanced search operators',
      'Wayback Machine',
      'Sherlock / Maigret',
      'WHOIS',
      'Shodan / Censys',
      'Reverse image search',
      'SpiderFoot',
    ],
    prepare: [
      'Memorise the useful Google operators: `site:`, `filetype:`, `inurl:`, `intitle:`, quotes for exact phrases, and `-` to exclude.',
      'Learn to read ExifTool output properly — GPS coordinates, timestamps and serial numbers solve more OSINT challenges than any other single tool.',
      'Practise geolocation on a blank map. Being able to say "this is eastern UP in October, not the coast" is a real, trainable skill.',
      'Get comfortable with the Wayback Machine, including its CDX API for enumerating every snapshot of a URL.',
      'Verify before you conclude. Most wrong OSINT answers come from an assumption that was never checked.',
    ],
    related: ['digital-forensics', 'steganography', 'cloud-security'],
  },
  {
    slug: 'pwn',
    name: 'Pwn',
    icon: 'Terminal',
    tagline: 'Buffer overflows, ROP & modern exploit development.',
    seoTitle: 'Pwn CTF Challenges — Binary Exploitation',
    seoDescription:
      'Pwn CTF challenges on buffer overflows, ROP chains, format strings and heap exploitation. Free student capture-the-flag competition by Cyber Invaders, NIET.',
    keywords: [
      'pwn ctf',
      'binary exploitation ctf',
      'buffer overflow challenge',
      'rop chain ctf',
      'ret2libc',
      'format string vulnerability',
      'heap exploitation ctf',
      'stack canary bypass',
      'exploit development practice',
      'learn pwn ctf',
      'pwnable challenges for beginners',
    ],
    intro: [
      'Pwn is exploit development. You are handed a binary running on a remote service, and your job is to give it input that makes it do something it should not — most often hand you a shell. Nothing here is a puzzle in the usual sense; it is a sequence of precise engineering decisions about memory layout, control flow and permissions.',
      'The category is the steepest learning curve on the board, and it is worth being honest about that. Solving a mid-difficulty heap challenge on your first day is not realistic. What is realistic is that the easiest pwn challenges are approachable within a couple of weeks of preparation, and that the underlying skills transfer directly to vulnerability research and security engineering.',
      'If you want a fast start, the entire discipline fits in one sentence: control the instruction pointer, then chain useful code you did not write. Everything else is detail.',
    ],
    faces: [
      {
        title: 'Stack overflows',
        body: 'Classic buffer overflows where a long input overwrites the saved return address. The foundation skill, and still the basis of most easy challenges.',
      },
      {
        title: 'ROP chains',
        body: 'Return-oriented programming to defeat non-executable stacks — chaining gadgets to call `execve("/bin/sh", NULL, NULL)` without ever executing injected shellcode.',
      },
      {
        title: 'Format string bugs',
        body: 'Unvalidated format specifiers in `printf` leaking stack memory or granting an arbitrary write through `%n`. Enormous information leak for comparatively little effort.',
      },
      {
        title: 'Heap exploitation',
        body: 'Use-after-free, double free and off-by-one bugs against `ptmalloc`, requiring careful reasoning about chunk metadata and allocator state.',
      },
      {
        title: 'Mitigation bypass',
        body: 'Defeating ASLR, stack canaries, NX and RELRO — by leaking a libc address, or by finding a function that discloses the canary for us.',
      },
      {
        title: 'Race conditions',
        body: 'TOCTOU bugs where a check and a use are separated in time, exploited with threads or by winning the scheduling window.',
      },
    ],
    tools: [
      'pwndbg (GDB)',
      'pwntools',
      'checksec',
      'ROPgadget / ropper',
      'Ghidra',
      'one_gadget',
      'strace / ltrace',
      'Docker (for local instances)',
    ],
    prepare: [
      'Complete the classic `pwn.college` or picoCTF reverse/exploit track. Both are free and structured.',
      'Learn pwntools properly rather than scripting by hand — `remote`, `recvuntil` and the ROP builder save hours per challenge.',
      'Run `checksec` on every binary before you analyse it. Knowing which mitigations are enabled decides your whole approach.',
      'Write the full ret2libc chain at least five times by hand. Once you can do it without documentation, everything above it becomes approachable.',
      'Set up Docker so you can pull the challenge binary locally and debug against your own instance instead of the shared server.',
    ],
    related: ['reverse-engineering', 'cryptography', 'web-exploitation'],
  },
  {
    slug: 'steganography',
    name: 'Steganography',
    icon: 'EyeOff',
    tagline: 'Hidden data extraction from files & media.',
    seoTitle: 'Steganography CTF Challenges',
    seoDescription:
      'Steganography CTF challenges covering hidden files, image LSB encoding, audio spectrograms and metadata concealment. Free student CTF by Cyber Invaders, NIET.',
    keywords: [
      'steganography ctf',
      'steganography challenges',
      'lsb steganography',
      'hidden file extraction',
      'image steganography tools',
      'spectrogram analysis',
      'strings hidden data',
      'png chunk analysis',
      'steghide practice',
      'zsteg tutorial',
      'learn steganography',
    ],
    intro: [
      'Steganography is the art of hiding data inside something that appears to be something else — a photograph, an audio file, a disk image, a piece of source code. The data is genuinely there, and often it is not hidden with great sophistication. The real skill is refusing to accept that the file you were given is only what it appears to be.',
      'Most solves follow the same arc: notice an anomaly (a file much larger than its visible content warrants, a colour channel that is not what it should be, an ID3 tag with unusual padding), then escalate through a short list of standard tools until something falls out. The escalation order is the thing to memorise, because time pressure means you cannot try things at random.',
      'It is a fast-scoring category. The techniques are finite, the tools are cheap, and a solver who knows the ladder can extract a flag in under two minutes. If you want points early in a competition, this is where they are.',
    ],
    faces: [
      {
        title: 'Concatenated files',
        body: 'A second file appended after the end of the first, or embedded after the image EOF marker. Recoverable with `binwalk` or a simple carve.',
      },
      {
        title: 'LSB encoding',
        body: 'Data written into the least significant bits of pixel values, recoverable with `zsteg`, `stegsolve` or a few lines of Python and Pillow.',
      },
      {
        title: 'Spectrogram and audio',
        body: 'Text or shapes encoded in the frequency domain of an audio file, visible in a spectrogram but completely inaudible on playback.',
      },
      {
        title: 'Tool-specific carriers',
        body: 'Data hidden using `steghide` in JPEGs or WAV, `outguess` in JPEGs, or OpenStego — each requiring its matching extraction tool.',
      },
      {
        title: 'Container manipulation',
        body: 'Hidden data in PNG ancillary chunks, JPEG comments, PDF metadata or font tables — legitimate container features used off-purpose.',
      },
      {
        title: 'Encoding layers',
        body: 'A flag that is itself base64 or hex encoded, sitting inside something already extracted. Layers are common and cheap to check.',
      },
    ],
    tools: [
      'binwalk',
      'zsteg',
      'stegsolve',
      'steghide',
      'exiftool',
      'Audacity (spectrogram)',
      'CyberChef',
      'Pillow (Python)',
    ],
    prepare: [
      'Memorise the escalation ladder: `file` → `strings` → `binwalk` → `exiftool` → `zsteg` → `steghide`. Trying them in order beats guessing.',
      'Learn to read `binwalk` output properly, including how to carve a specific offset rather than extracting everything.',
      'Get comfortable with `zsteg` bit-plane syntax — knowing what `-b 2,8,lsb,xy` selects is worth several solves on its own.',
      'Keep Audacity installed and know how to switch to spectrogram view. Audio challenges are fast once you can see them.',
      'Always run a hex dump on anything that feels wrong. `xxd | head` catches more than you would expect.',
    ],
    related: ['digital-forensics', 'cryptography', 'osint'],
  },
  {
    slug: 'cloud-security',
    name: 'Cloud Security',
    icon: 'Cloud',
    tagline: 'Misconfigurations, IAM abuse & cloud attack paths.',
    seoTitle: 'Cloud Security CTF Challenges',
    seoDescription:
      'Cloud security CTF challenges on IAM abuse, storage misconfiguration, metadata attacks and cloud attack paths. Free student CTF by Cyber Invaders, NIET Greater Noida.',
    keywords: [
      'cloud security ctf',
      'cloud security challenges',
      'iam misconfiguration',
      's3 bucket exposure',
      'cloud metadata attack',
      'aws security best practices',
      'azure security challenges',
      'container security ctf',
      'infrastructure as code security',
      'cloud attack paths',
      'learn cloud security ctf',
    ],
    intro: [
      'Cloud security challenges are unusual among CTF categories because a meaningful share of them are not exploitable in the classic sense — they are misconfigurations. A bucket that permits anonymous listing, a role with far more permissions than its function needs, a metadata service reachable from a function you can influence. The attacker does not break in; they use what was left open.',
      'That reframes how you approach the category. Instead of looking for a bug in an application, you are reading a trust boundary and asking what it permits. The IAM policy is the vulnerability. The attach-role configuration is the vulnerability. The lesson is one security teams pay for expensively in production, which is exactly why it is worth practising here.',
      'Expect challenges built around realistic mistakes — an over-permissive trust policy, a hardcoded key in a repository, a public snapshot, or a server-side request that reaches the metadata endpoint. All of these appear regularly in real cloud incidents.',
    ],
    faces: [
      {
        title: 'Storage misconfiguration',
        body: 'Buckets and containers exposed to anonymous list or read, overly permissive object ACLs, and backup archives left readable.',
      },
      {
        title: 'IAM & privilege abuse',
        body: 'Over-broad role policies, trust relationships that accept unexpected principals, and privilege escalation chains through role assumption.',
      },
      {
        title: 'Metadata services',
        body: 'Instance and function metadata endpoints abused to steal temporary credentials — the same technique behind real-world cloud compromises.',
      },
      {
        title: 'Exposed secrets',
        body: 'API keys, access keys and connection strings leaked in environment variables, logs, source control or error messages.',
      },
      {
        title: 'Containers & orchestration',
        body: 'Dockerfiles and manifests with excessive capabilities, host mounts, privileged mode or missing security context.',
      },
      {
        title: 'Network exposure',
        body: 'Open security groups, public load balancers and management interfaces reachable from the public internet.',
      },
    ],
    tools: [
      'AWS CLI',
      'Azure CLI',
      'trufflehog / gitleaks',
      'ScoutSuite / cloudmapper',
      'kube-bench',
      'Terraform',
      'ffuf / nuclei',
      'CyberChef',
    ],
    prepare: [
      'Get a free-tier account on one major cloud and build something small. Reading a real IAM policy only makes sense once you have written one.',
      'Study the four most common real-world cloud compromises: exposed credentials, permissive storage, SSRF to metadata, and over-privileged CI/CD.',
      'Learn the AWS shared-responsibility boundary properly — it explains most of what these challenges are testing.',
      'Practise secret scanning with `gitleaks` or `trufflehog` against public repositories to see what leaks look like in the wild.',
      'Read a `Dockerfile` and a Kubernetes manifest with a security eye. Insecure defaults are everywhere and worth recognising instantly.',
    ],
    related: ['web-exploitation', 'osint', 'reverse-engineering'],
  },
  {
    slug: 'ai-llm-security',
    name: 'AI / LLM Security',
    icon: 'Bot',
    tagline: 'Prompt injection, model abuse & ML-system attacks.',
    seoTitle: 'AI & LLM Security CTF Challenges',
    seoDescription:
      'AI and LLM security CTF challenges covering prompt injection, jailbreaks, data poisoning and model abuse. Free student CTF by Cyber Invaders, NIET Greater Noida.',
    keywords: [
      'ai security ctf',
      'llm security challenges',
      'prompt injection ctf',
      'llm jailbreak challenge',
      'ai model security competition',
      'machine learning security ctf',
      'indirect prompt injection',
      'ai agent security ctf',
      'data poisoning challenge',
      'model extraction attack',
      'learn ai security',
    ],
    intro: [
      'AI and LLM security is the newest category on the board, and the one where the attack surface is still genuinely unsettled. The interesting question is not "can you make the model say something forbidden" — that is easy and mostly boring. It is "can you make an LLM-connected system take an action it was never supposed to take".',
      'That is prompt injection in its serious form: getting instructions from untrusted data into a context window that a model treats as authoritative. When a model can read a web page, a PDF or an email and then act on what it finds, the data becomes code. Several of these challenges are built precisely on that boundary.',
      'This is also the category where preparation pays off fastest, because the public material is recent, plentiful and mostly written by practitioners. Unlike exploit development, you are not waiting for someone to publish a technique — for prompt injection, most of it is already documented.',
    ],
    faces: [
      {
        title: 'Direct prompt injection',
        body: 'Overriding system instructions through crafted user input, instruction-collision attacks and role-play framing designed to bypass refusal behaviour.',
      },
      {
        title: 'Indirect prompt injection',
        body: 'Instructions hidden in content the model retrieves — a webpage, a document, an image, an email — so the model treats attacker text as trusted context.',
      },
      {
        title: 'Tool & agent abuse',
        body: 'Coaxing an LLM with tool access into calling the wrong function, passing unvalidated arguments, or exfiltrating context it should never have surfaced.',
      },
      {
        title: 'Data & model poisoning',
        body: 'Manipulating training or retrieval data so a model produces a targeted wrong answer, recovers a memorised secret, or behaves differently under a trigger phrase.',
      },
      {
        title: 'Sensitive data exposure',
        body: 'Prompting a model until it reveals system prompts, embedded secrets, cross-tenant context or information it was configured never to disclose.',
      },
      {
        title: 'Guardrail evasion',
        body: 'Encoding tricks, token-level manipulation, adversarial suffixes and multi-turn escalation that defeat output filters while preserving the objective.',
      },
    ],
    tools: [
      'curl / httpie',
      'Burp Suite',
      'Python + openai-compatible clients',
      'Gradio / Streamlit (for local models)',
      'Promptfoo',
      'Nuclei templates',
      'Custom tokeniser scripts',
      'AnythingLLM / LangChain test rigs',
    ],
    prepare: [
      'Read the OWASP Top 10 for LLM Applications end to end. It is short, current, and maps almost directly onto these challenges.',
      'Follow the published prompt-injection research from Simon Willison and the OWASP GenAI project — this is a category where the reading list is the preparation.',
      'Build a local model endpoint you can query in a loop, so you can iterate on a payload in seconds instead of through a browser.',
      'Practise multi-turn escalation. Most single-shot injection fails, and most multi-turn escalation succeeds.',
      'Understand tokenisation well enough to explain why "spell it backwards" and encoding tricks work — that understanding generalises to every bypass.',
    ],
    related: ['web-exploitation', 'cryptography', 'cloud-security'],
  },
  {
    slug: '',
    name: 'Miscellaneous',
    icon: 'Puzzle',
    tagline: 'Oddball, puzzle & cross-discipline challenges.',
    seoTitle: 'Miscellaneous CTF Challenges',
    seoDescription:
      'Miscellaneous CTF challenges — logic puzzles, encoding oddities and cross-discipline problems that do not fit a single category.',
    keywords: [
      'miscellaneous ctf challenges',
      'logic puzzle ctf',
      'encoding challenges ctf',
    ],
    intro: [
      'The Miscellaneous bucket holds everything that does not fit neatly elsewhere: logic puzzles, encoding oddities, lateral-thinking problems and challenges that deliberately combine two disciplines. Expect nothing consistent about them except that they reward careful reading.',
    ],
    faces: [],
    tools: [],
    prepare: [],
    related: [],
  },
]

/** Categories that have their own page. */
export const pagedCategories = categories.filter((c) => c.slug !== '')

export function getCategory(slug: string): Category | undefined {
  return pagedCategories.find((c) => c.slug === slug)
}

export function categoryHref(slug: string): string {
  return slug ? `/categories/${slug}` : '/categories'
}

/** Related slugs first, then everything else, so each page has a full grid. */
export function relatedCategories(slug: string, limit = 3): Category[] {
  const current = getCategory(slug)
  if (!current) return pagedCategories.slice(0, limit)

  const preferred = current.related
    .map((r) => getCategory(r))
    .filter((c): c is Category => Boolean(c))

  const filler = pagedCategories.filter((c) => c.slug !== slug && !current.related.includes(c.slug))

  return [...preferred, ...filler].slice(0, limit)
}