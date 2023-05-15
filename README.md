This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





## Documentație Proiect Cloud


1.	Introducere + Descriere
Cu ajutorul aplicației, utilizatorii pot accesa informații utile despre animale, precum numele, descrierea și imaginea acestora. Informațiile sunt stocate într-o bază de date MongoDB, ceea ce permite o gestionare eficientă a datelor și o interacțiune ușoară cu acestea. De asemenea, aplicația include și cele mai recente știri din domeniul animalelor, prin intermediul News API, astfel încât utilizatorii să fie întotdeauna la curent cu cele mai noi informații.
Funcționalitatea aplicației este intuitivă și ușor de utilizat. Utilizatorii pot șterge cardurile existente, precum și să adauge carduri noi la sfârșitul listei. Utilizatorii pot să personalizeze informațiile afișate în funcție de preferințele lor și să adauge informații noi despre animale.
Aplicația finală a fost publicată cu ajutorul unei platforme in cloud, VERCEL.

2.	Descriere API 
News API este o platformă care oferă acces la o vastă colecție de articole de știri din întreaga lume. Acesta utilizează tehnologii moderne de extragere a datelor și procesare a limbajului natural pentru a colecta și clasifica articolele de știri din peste 100.000 de surse online. Această platformă oferă dezvoltatorilor și utilizatorilor finali posibilitatea de a căuta și accesa articole de știri din diferite surse și de a le integra în aplicațiile lor.
News API oferă o interfață de programare (API) simplă și ușor de utilizat, poate fi utilizat într-o varietate de aplicații, inclusiv în aplicații de știri. De asemenea, platforma oferă opțiuni de personalizare, cum ar fi filtrarea știrilor în funcție de cuvinte cheie sau de țară, ceea ce permite utilizatorilor să găsească și să acceseze informațiile de care au nevoie.

3.	Flux de date
Funcția getRecords permite obținerea tuturor înregistrărilor din colecția MongoDB. Se utilizează metoda find a obiectului collection pentru a obține toate înregistrările din colecție.
Funcția postRecords permite adăugarea unei noi înregistrări în colecția MongoDB. Se utilizează metoda insertOne a obiectului collection pentru a adăuga o înregistrare în colecție.
Funcția deleteRecord permite ștergerea unei înregistrări din colecția MongoDB, bazându-se pe id-ul înregistrării. Se utilizează metoda deleteOne a obiectului collection pentru a șterge înregistrarea cu id-ul specificat.
Aceste metode sunt utilizate pentru a interacționa cu baza de date MongoDB și a efectua operațiuni CRUD asupra acesteia.

4.	Capturi de ecran
Pagina principală
 
![image](https://github.com/MalinaG123/PrCloud/assets/91585928/9fe58a87-4291-40a2-ad29-10935444e6db)

Pagina pentru inserarea noilor informații
 
![image](https://github.com/MalinaG123/PrCloud/assets/91585928/e9da90f8-a3ec-4f96-8d91-dce063fea12f)


Pagina de știri

![image](https://github.com/MalinaG123/PrCloud/assets/91585928/3776ace4-1fcb-4fef-a942-9345251dd85c)

5.	Referințe
Link-ul public către aplicație: https://pr-cloud-evcu1ujkz-malinag123.vercel.app/
Link GitHub: https://github.com/MalinaG123/PrCloud
Link demo aplicație: https://youtu.be/uymkMQhyhXA

