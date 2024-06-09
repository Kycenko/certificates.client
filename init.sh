npx prisma generate
npx prisma migrate dev --name init
npm run prisma:seed 
npm run start:prod