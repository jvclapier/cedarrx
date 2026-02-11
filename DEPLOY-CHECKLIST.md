# CedarRX - Deployment Checklist

## Pre-Launch Tasks

### Email (Transfer Prescription Form)
- [ ] Verify `cedarrx.com` domain in Resend ([resend.com/domains](https://resend.com/domains))
  - Add the DNS records Resend provides to your domain registrar
  - Click "Verify" in Resend dashboard
- [ ] Update "from" address in code from `onboarding@resend.dev` to `noreply@cedarrx.com`
  - File: `app/api/transfer/route.ts`
- [ ] Test form submission on live site to confirm email arrives at info.cedarrx@gmail.com

### Broken Links to Fix
- [ ] Hero CTA "Refill Rx" points to `/refill` (page doesn't exist) - need refill URL from provider
- [ ] Hero CTA "Contact Us" points to `/contact` (page doesn't exist) - update to `#footer` or build contact page

### Phone Number Mismatch
- [ ] Decide correct number: Navbar/Hero use `208-329-7811`, Transfer page uses `208-329-7781`
- [ ] Make phone number consistent across all pages

### Content Still Needed
- [ ] Sterile vial image for compounding section (replacing current image)
- [ ] Refill prescription URL (for "Refill Rx" button)

### Domain & Hosting
- [ ] Point `cedarrx.com` to Vercel (if not already done)
- [ ] Verify SSL certificate is active
- [ ] Add `RESEND_API_KEY` to Vercel environment variables (done)

## Post-Launch
- [ ] Test all nav links from homepage
- [ ] Test all nav links from /transfer page
- [ ] Test transfer form submission end-to-end
- [ ] Test mobile responsiveness
- [ ] Verify images load correctly on live site
- [ ] Set up Google Analytics (if desired)
- [ ] Monthly blog setup (exec mentioned interest)
