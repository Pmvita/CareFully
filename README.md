# Carefully

A trusted babysitter and nanny booking platform - combining the best features from Care.com, Sittercity, UrbanSitter, and Bambino.

## Features

### For Parents & Guardians
- **Search & Discover**: Find trusted babysitters and nannies in your neighborhood
- **Verified Caregivers**: Background checks, reviews, and experience verification
- **Flexible Booking**: Book for last-minute needs or schedule in advance
- **Secure Payments**: Book with deposits, transparent pricing, in-app payments
- **Direct Communication**: Message caregivers and conduct video interviews
- **Reviews & Ratings**: Build trust through community feedback

### For Sitters & Nannies (Independent Contractors)
- **Set Your Own Rates**: Full control over hourly rates as independent contractors
- **Manage Availability**: Flexible schedule management
- **Choose Your Jobs**: Accept bookings that fit your preferences
- **Secure Earnings**: Track earnings and get paid securely
- **Build Your Reputation**: Grow your profile through positive reviews
- **Professional Tools**: Calendar, messaging, and booking management

## Key Features Analyzed & Implemented

Based on analysis of Care.com, Sittercity, UrbanSitter, and Bambino:
- Caregiver-controlled pricing (all platforms) ?
- Non-refundable deposits/deposit system ?
- Independent contractor model ?
- Parent/Guardian and Sitter/Nanny dual roles ?
- In-app booking and payments ?
- Reviews and ratings ?
- Background verification ?
- Messaging and communication ?
- Neighborhood/network-based matching ?
- Calendar and availability management ?

## Project Structure

`
Carefully/
+-- web/          # Next.js landing page & download page
¦   +-- app/
¦   ¦   +-- page.tsx      # Landing page with features
¦   ¦   +-- download/     # Download page for the app
+-- app/          # Expo React Native mobile app (iOS & Android)
¦   +-- src/
¦   ¦   +-- screens/     # All app screens
¦   ¦   +-- navigation/  # Navigation setup
+-- shared/       # Shared types and utilities
`

## Getting Started

### Web (Landing & Download)
`ash
cd web
npm install
npm run dev
`
Visit http://localhost:3000

### Mobile App (Expo)
`ash
cd app
npm install
npx expo start
`
- Press i for iOS simulator
- Press  for Android emulator
- Scan QR code with Expo Go app

## Tech Stack

- **Web**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Mobile**: React Native, Expo SDK 51, React Navigation, Expo Vector Icons
- **UI**: Modern gradient design, responsive layouts

## Downloads

Visit the web app's download page to get the iOS and Android versions.

