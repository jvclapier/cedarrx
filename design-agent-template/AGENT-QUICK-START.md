# 🚀 Design Agent - Quick Start

Use this when invoking the Design Agent in Cursor.

---

## 📌 How to Use

**Always explicitly call the agent with @ reference:**

### **Method 1: Short Command** ⚡ (Recommended!)
```
@.DESIGN Build a hero section
```
*Only 7 characters to type! Fast and explicit.*

### **Method 2: Full Reference**
```
@DESIGN-AGENT.md Build a testimonials section
```
*Full filename for maximum clarity*

**💡 Pro Tip:** Set up keyboard shortcut:
- Mac: System Settings → Keyboard → Text Replacements
- When you type: `dd` → Replace with: `@.DESIGN `
- Now just type: `dd Build a section`

The agent will ask questions and present options automatically!

---

## 🎨 Quick Reference

### **Color Palette**
<!-- Update these with your brand colors -->
- **Dark**: `[#DARK_COLOR]` (hero, dramatic sections)
- **Accent**: `[#ACCENT_COLOR]` (CTAs, highlights)
- **Light**: `#FFFFFF` (text on dark, light sections)
- **Subtle**: `[#LIGHT_BG]` (subtle backgrounds)

### **Fonts**
<!-- Update these with your brand fonts -->
- **[Heading Font]** - Bold headings
- **[Body Font]** - Body text (light 300)
- **[Accent Font]** - Italic accents (optional)

### **Buttons**
- Primary CTA: Accent `bg-[#ACCENT_COLOR]` → `hover:bg-[#ACCENT_HOVER]`
- Secondary: Light on dark `bg-white text-[#DARK_COLOR]`

---

## 💬 Example Prompts

### **Building a New Section**
```
@DESIGN-AGENT.md

Build a testimonials section for the site.

Inspiration: Check out the social proof section on superhuman.com
```

### **With Specific Requirements**
```
@DESIGN-AGENT.md

Create a "How It Works" section with 3 steps:
1. Sign up
2. Get started  
3. See results

Make it interactive with dark background.
```

### **Asking for Options**
```
@DESIGN-AGENT.md

I need a pricing section. Show me 3 different layout options to choose from.
```

---

## 🎯 The Agent Will:

1. ✅ Ask for inspiration sites
2. ✅ Present 2-3 design options
3. ✅ Use only brand colors
4. ✅ Add cutting-edge interactions
5. ✅ Make content easy to update
6. ✅ Ensure mobile responsiveness

---

## 📋 Typical Workflow

1. **You say:** "Build a [section name]"
2. **Agent asks:** Inspiration? Content? Mood?
3. **Agent presents:** 3 design options with sketches
4. **You choose:** Option 1, 2, 3, or blend
5. **Agent builds:** Complete section with interactions
6. **You review:** Test and iterate

---

## 🔥 Pro Tips

- **Always reference the agent file**: `@DESIGN-AGENT.md`
- **Share inspiration**: "Check out [site]'s [section]"
- **Request options**: "Show me 3 different layouts"
- **Be specific**: "Dark background with parallax"
- **Iterate**: "Can we make the CTA more prominent?"

---

## 📞 Quick Commands

**Start a section:**
```
@DESIGN-AGENT.md Build a hero section
```

**With inspiration:**
```
@DESIGN-AGENT.md Create pricing like stripe.com but in our style
```

**Multiple options:**
```
@DESIGN-AGENT.md Show me 3 different ways to display testimonials
```

---

**That's it! The agent handles the rest.** 🎨✨
