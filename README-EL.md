<div align="center">
  <h1>

✍️

Handmade Blog

[![build](https://img.shields.io/github/workflow/status/ParkSB/handmade-blog/Node%20CI/master?style=flat-square)](https://github.com/ParkSB/handmade-blog/actions?query=workflow%3A%22Node+CI%22) ![node](https://img.shields.io/badge/node-%3E%3D%2010.0-brightgreen?style=flat-square) [![demo](https://img.shields.io/netlify/3f01acb3-1107-470a-914f-90d100b87d85?label=demo&style=flat-square)](https://handmade-blog.netlify.com/) [![license](https://img.shields.io/github/license/ParkSB/handmade-blog?style=flat-square)](LICENSE)

  </h1>
  
  <strong>Διαβάστε το παρακάτω αρχείο σε διαφορετική γλώσσα:</strong> [:us:](README.md) [:kr:](README-KO.md) [:indonesia:](README-ID.md) [:brazil:](README-PT-BR.md) [:it:](README-IT.md) [:malaysia:](README-MS.md)
</div>

To Handmade Blog είναι ένα ελαφρύ πρόγραμμα παραγωγής ενός στατικού blog, για ανθρώπους που θέλουν να ξεκινήσουν ένα blog γρήγορα. Υποστηρίζει αρχεία τύπου άρθρο(article) για δημοσιεύσεις blog, αρχεία τύπου δουλειάς(work) για portfolio, επισημάνσεις κώδικα , σύνταξη [KaTeX](https://katex.org/), υποσημειώσεις, και πολλά άλλα.

## Παράδειγμα: [Εδώ](https://handmade-blog.netlify.com/)

![Προεπισκόπηση σελίδας άρθρου](https://user-images.githubusercontent.com/6410412/74097056-be43d100-4b4a-11ea-806b-7bd263d7f623.png)

## Ξεκινώντας

1. Κάντε κλικ στο κουμπί 'Use this template' που βρίσκεται πάνω από την λίστα αρχείων γιαν αν δημιουργήσετε ένα καινούριο repository. Εάν θέλετε να χρησιμοποιήσετε domain τύπου github.io, θα πρέπει να ονομάσετε το repository σας `{YOUR_ID}.github.io`. (π.χ., `betty-grof.github.io`). Μην ξεχάσετε να ενεργοποιήσετε την επιλογή 'Include all branches'.

   ![Κάντε κλικ στο κουμπί 'Use this template'](https://user-images.githubusercontent.com/6410412/93741226-f524ae00-fc26-11ea-8f88-ba634d2de66b.png)

   ![Ονομάτισε το repository σε id.github.io, και ενεργοποίησε την επιλογή 'Include all branches'](https://user-images.githubusercontent.com/6410412/93741223-f48c1780-fc26-11ea-9980-8911e531a29c.png)

2. Κάντε κλικ στην καρτέλα 'Settings' στο repository σας, και αναθέστε το `gh-pages` branch στο branch πηγής . Το GitHub Pages θα φιλοξενήσει την ιστοσελίδα σας με βάση το `gh-pages` branch. Μετά το πέρας λίγων λεπτών θα είσαστε σε θέση να μεταβήτε στην ιστοσελίδα σας μέσω του παρακάτω url `https://{YOUR_ID}.github.io/` αφού αντικαταστήσετε το `{YOUR_ID}` με το id που επιλέξατε προηγουμένως.

   ![Κάντε κλικ στην καρτέλα 'Settings'](https://user-images.githubusercontent.com/6410412/93750006-d11c9900-fc35-11ea-9ac1-4f92216f28f9.png)

   ![Αναθέστε το gh-pages branch στο branch πηγής](https://user-images.githubusercontent.com/6410412/93741218-f2c25400-fc26-11ea-9e30-eddb9a2a3b3f.png)

3. Κάντε clone το repository, και κάντε εγκατάσταση τα node packages.

   ```shell script
   $ git clone https://github.com/{YOUR_ID}/{REPOSITORY_NAME}.git # git clone https://github.com/betty-grof/betty-grof.github.io.git
   $ cd {REPOSITORY_NAME} # cd betty-grof.github.io
   $ npm install
   ```

4. Τροποποιήστε το αρχείο `config.json` του φακέλου `services` ώστε να θέσετε τον τίτλο και τον υπότιτλο του blog σας.

   ```json
   {
     "blogTitle": "Betty Grof",
     "blogSubtitle": "Oh My Glob",
     "article": {
       "tableOfContents": true
     }
   }
   ```

5. Τρέξτε έναν τοπικό server στο `http://localhost:1234/`. To script `npm start` τρέχει έναν τοπικό server έχοντας ως βάση τον κώδικα του φακέλου `server`.

   ```shell script
   $ npm start
   ```

   ![Η ιστοσελίδα με τίτλο 'Betty Grof' στο http://localhost:1234/](https://user-images.githubusercontent.com/6410412/93754683-155f6780-fc3d-11ea-99de-92c747c103f9.png)

6. Κάντε commit και push τις αλλαγές από φάκελο εργασίας σας στο remote repository.

   ```shell script
   $ git add ./services/config.json
   $ git commit -m "Set the blog title and subtitle"
   $ git push origin master
   ```

7. Μόλις η ιστοσελίδα σας είναι έτοιμη να φιλοξενηθεί τρέξτε το script `deploy`. Αυτό το script δημιουργεί τοπικά αρχεία στο φάκελο `dist` και τα κάνει push στο `gh-pages` branch στο οποίο εμπεριέχονται μόνο τα αρχεία που βρίσκονται εντός του φακέλου `dist`. Το GitHub Pages θα φιλοξενήσει την ιστοσελίδα σας στο `https://{YOUR_ID}.github.io/` με βάση το `gh-pages` αυτόματα.

   ```shell script
   $ npm run deploy
   ```

## Χρήση

### Γράψτε και δημοσιεύστε ένα αρχείο

1. Γράψτε ένα αρχείο σε έναν από του φακέλους `_articles` ή `_works`.

2. Τρέξτε την εντολή `npm run publish article` ή `npm run publish work` ώστε να μετατρέψετε τα αρχεία τύπου markdown σε HTML.

3. Κάντε προεπισκόπηση του αρχείου που μετατράπηκε σε τοπικό server με την χρήση της `npm start`.

4. Κάντε commit και push τις αλλαγές στο repository, και τρέξτε `npm run deploy` για να ολοκληρώσετε το deploy.

### Αλλαγή Σελίδας

Τροποποιήστε ένα πρότυπο ejs για να αλλάξετε τα περιεχόμενα μίας υπάρχουσας σελίδας. Για παράδειγμα, εάν θέλετε να προσθέσετε μια εικόνα στην αρχική σελίδα του blog σας, ανοίξτε το αρχείο `app/templates/index.ejs`, και προσθέστε το tag `img` στο element `main-container`.

```html
<main id="main-container">
  <img src="../assets/profile.jpg" alt="My profile picture" />
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</main>
```

Στην συνέχεια, τρέξτε την εντολή `npm run publish page` ώστε να δημοσιεύσετε την τροποποιημένη σελίδα και κάντε προεπισκόπηση των αλλαγών με την χρήση της εντολής `npm start`.

```shell script
$ npm run publish page
$ npm start
```

Εάν είσαστε έτοιμοι για δημοσίευση, τρέξτε την εντολή `npm run deploy`. Με αυτόν τον τρόπο μπορείτε αλλάξετε οποιαδήποτε από τις σελίδες επιθυμείτε. (Μπορεί να χρειαστείτε να καταλάβετε την δομή του project.)

### Η δομή του project

- `_articles` - Αρχεία Markdown για δημοσιεύσεις blog.
- `_works` - Αρχεία Markdown για δημοσίευση portfolio.
- `app`
  - `assets` - Όλα τα αρχεία που γίνονται import από αρχεία HTML όπως εικόνες,γραμματοσειρές, κλπ.
  - `public` - Αρχεία HTML τα οποία δημιουργούνται από το script `publish`. Οι φάκελοι `server` και `dist` είναι βασισμένοι σε αυτόν τον φάκελο. Παρακαλείστε να μην κάνετε άμεσες αλλαγές στα αρχεία που βρίσκονται εντός του φακέλου.
    - `article` - Αρχεία HTML που παρήχθησαν από τροποποίηση των αρχείων του φακέλου `_articles`.
    - `work` - Αρχεία HTML που παρήχθησαν από τροποποίηση των αρχείων του φακέλου `_works`.
  - `src` - Ο πηγαίος κώδικας που γίνεται import από τα αρχεία HTML.
    - `css` - Αρχεία CSS που δημιουργήθηκαν από το script `build`.
    - `scss`
    - `ts`
  - `static` - Οποιοδήποτε στατικό αρχείο το οποίο δεν έγινε compile από το script `build` όπως `robots.txt`, `sitemap.xml`, ή τα αρχεία SEO. Το script `build` αντιγράφει όλα τα αρχεία κάτω από αυτό το φάκελο στο φάκελο `dist`.
  - `templates` - Τα αρχεία με πρότυπο EJS. Το script `publish` τροποποιεί τα αρχεία κάτω από αυτόν τον φάκελο σε αρχεία τύπου HTML.
- `dist` - Τα αρχεία που έγιναν compile από το script `build`. Το script `deploy` δημοσιεύει την ιστοσελίδα στο GitHub pages με βάση αυτόν τον φάκελο. Παρακαλείστε να μην κάνετε άμεσες αλλαγές στα αρχεία που βρίσκονται εντός του φακέλου.
- `server` - Τα αρχεία που έγιναν compile από το script `build`. Το αρχείο `start` ξεκινά έναν τοπικό server έχοντας ως βάση αυτόν τον φάκελο. Παρακαλείστε να μην κάνετε άμεσες αλλαγές στα αρχεία που βρίσκονται εντός του φακέλου.
- `services` - Ο πηγαίος κώδικας που υλοποιεί το script `publish`.
  - `classes`
  - `models`
- `tools` - Ο πηγαίος κώδικας που υλοποιεί διάφορα script του npm.

## Παραδείγματα

- parksb.github.io: https://github.com/parksb/parksb.github.io
- betty-grof.github.io: https://github.com/betty-grof/betty-grof.github.io

## Διαθέσιμα Scripts

### `npm start`

Ξεκινά έναν τοπικό server στο http://localhost:1234/.

### `npm run publish`

Μετατρέπει τα πρότυπα σε αρχεία HTML.

```shell script
$ npm run publish article
```

Μετατρέπει όλες τις σελίδες άρθρων.

```shell script
$ npm run publish works
```

Μετατρέπει όλες τις σελίδες εργασίας(portfolio).

```shell script
$ npm run publish article 5
```

Μετατρέπει το σελίδα του άρθρου με id 5.

```shell script
$ npm run publish work 3
```

Μετατρέπει το σελίδα του εργασίας με id 5.

```shell script
$ npm run publish page
```

Μετατρέπει όλες τις σελίδες.

### `npm run watch`

Κάνει build τα αρχεία προτύπων στον κατάλογο `templates` και τα αρχεία markdown στον κατάλογο `_articles` αυτόματα κάθε φορά που ένα από αυτά τροποποιείται.

### `npm run build`

Κάνει build τα αρχεία με την χρήση του parcel bundler.

### `npm run deploy`

Κάνει build και deploy τα αρχεία.

## Αδεια

Το παρόν το έργο έχει άδεια βάσει της άδειας MIT - δείτε το αρχείο [LICENSE](LICENSE) για παραπάνω λεπτομέρειες.
