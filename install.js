#!/usr/bin/env node
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { homedir } from 'os';

const skillsDir = join(homedir(), '.claude', 'skills');
const skills = ['tax-memo', 'client-advisory-letter', 'audit-finding-summary', 'engagement-letter'];

for (const skill of skills) {
  const dest = join(skillsDir, skill);
  if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
  copyFileSync(new URL(`./skills/${skill}/SKILL.md`, import.meta.url).pathname, join(dest, 'SKILL.md'));
  console.log(`✓ Installed /${skill}`);
}
console.log('\nSkills installed! Restart Claude Code to use them.');
