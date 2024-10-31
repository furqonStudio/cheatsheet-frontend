import { CodeSpan } from '@/components/molecules/CodeSpan'
import Image from 'next/image'

export const accordionData = [
  {
    title: 'HTML Dasar',
    accordions: [
      {
        title: 'Struktur HTML',
        description: (
          <>
            <pre>
              <code>
                {`<!DOCTYPE html>
<html>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`}
              </code>
            </pre>

            <p>
              <CodeSpan>!DOCTYPE html</CodeSpan>: untuk deklarasi tipe dokumen
            </p>
            <p>
              <CodeSpan>html</CodeSpan>: dokumen html dimulai dengan ini
            </p>
            <p>
              <CodeSpan>body</CodeSpan>: bagian yang ditampilkan
            </p>
          </>
        ),
      },
      {
        title: 'Elements',
        description: (
          <>
            <CodeSpan>tagname</CodeSpan> Konten <CodeSpan>/tagname</CodeSpan>
          </>
        ),
      },
      {
        title: 'Attributes',
        description: (
          <>
            <CodeSpan>a href="#" Visit W3Schools</CodeSpan>
            <p>href merupakan atribut</p>
          </>
        ),
      },
      {
        title: 'Headings',
        description: (
          <>
            <CodeSpan>h1</CodeSpan>-<CodeSpan>h6</CodeSpan>
          </>
        ),
      },
      {
        title: 'Paragraphs',
        description: (
          <>
            <p>
              <CodeSpan>p</CodeSpan>: untuk menampilkan paragraf
            </p>
            <p>
              <CodeSpan>pre</CodeSpan>: untuk menampilkan paragraf sesuai format
            </p>
          </>
        ),
      },
      {
        title: 'Formatting',
        description: (
          <>
            <p>
              <CodeSpan>b</CodeSpan>: Bold text <br />
              <CodeSpan>strong</CodeSpan>: Important text <br />
              <CodeSpan>i</CodeSpan>: Italic text <br />
              <CodeSpan>em</CodeSpan>: Emphasized text <br />
              <CodeSpan>mark</CodeSpan>: Marked text <br />
              <CodeSpan>small</CodeSpan>: Smaller text <br />
              <CodeSpan>del</CodeSpan>: Deleted text <br />
              <CodeSpan>ins</CodeSpan>: Inserted text <br />
              <CodeSpan>sub</CodeSpan>: Subscript text <br />
              <CodeSpan>sup</CodeSpan>: Superscript text
            </p>
          </>
        ),
      },
      {
        title: 'Quotation and Citation',
        description: (
          <>
            <p>
              <CodeSpan>blockquote</CodeSpan>: Kutipan dari sumber lain <br />
              <CodeSpan>q</CodeSpan>: Kutipan singkat <br />
              <CodeSpan>abbr</CodeSpan>: Singkatan memunculkan tooltip <br />
              <CodeSpan>address</CodeSpan>: Kontak <br />
              <CodeSpan>cite</CodeSpan>: Title karya seni <br />
              <CodeSpan>bdo</CodeSpan>: Bi-Directional Override
            </p>
          </>
        ),
      },
      {
        title: 'Comments',
        description: (
          <p>
            <CodeSpan>!-- Write your comments here --</CodeSpan>
          </p>
        ),
      },
      {
        title: 'Links',
        description: (
          <>
            <p>
              <CodeSpan>a href="url"&gt;link text&lt;/a</CodeSpan>
            </p>
            <br />

            <p>
              Target: <br />
              _self, _blank, _parent, _top
            </p>
            <br />

            <p>
              Mailto:
              <br />
              <CodeSpan>
                a href="mailto:someone@example.com"&gt;link text&lt;/a
              </CodeSpan>
            </p>

            <br />
            <p>
              Title:
              <br />
              <CodeSpan>a title="title"&gt;link text&lt;/a</CodeSpan>
            </p>
          </>
        ),
      },
      {
        title: 'Images',
        description: (
          <>
            <p>
              <CodeSpan>img</CodeSpan>
            </p>
            <br />

            <p>
              Attribut wajib: <br />
              src: alamat gambar alt: alternatif text
            </p>
            <br />

            <p>
              Attribut lain: <br />
              width, height
            </p>
            <br />

            <p>
              Image Map: <br />
              <CodeSpan>map</CodeSpan>, <CodeSpan>area</CodeSpan>
              <br />
              Attribut: usemap, name,
            </p>
            <br />

            <p>
              Area Map:
              <br />
              <CodeSpan>area</CodeSpan>
              <br />
              rect, circle, poly, default
              <br />
              Attribut: coords, href, shape, onclick,
            </p>
            <br />

            <p>
              Background Image:
              <br />
              <CodeSpan>
                p style="background-image: url('img_girl.jpg');"
              </CodeSpan>
              <br />
              background-repeat: no-repeat;
              <br />
              background-attachment: fixed;
              <br />
              background-size: cover;
            </p>
            <br />

            <p>
              Picture Element:
              <br />
              Menampilkan gambar yang berbeda sesuai dengan ukuran layar. Akan
              menampilkan gambar pertama yang match. Terdapat satu atau lebih
              element <CodeSpan>source</CodeSpan>
              <br />
              Attribute: srcset
              <br />
              Selalu tambahkan tag img di akhir
            </p>
            <br />
          </>
        ),
      },
      {
        title: 'Favicon',
        description: (
          <>
            <p>
              <CodeSpan>
                link rel="icon" type="image/x-icon" href="/images/favicon.ico"
              </CodeSpan>
            </p>
          </>
        ),
      },
      {
        title: 'Page Title',
        description: (
          <>
            <p>
              <CodeSpan>title</CodeSpan>
            </p>
          </>
        ),
      },
      {
        title: 'Tables',
        description: (
          <>
            <pre>
              <code>
                {`<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
</table>`}
              </code>
            </pre>

            <p>Style: </p>
            <br />
            <p>border: garis tepi</p>
            <p>border-collapse: kerapatan border</p>
            <p>border-radius: kelengkungan border</p>
            <p>border-style: gaya border</p>
            <p>border-color: warna border</p>
            <p>padding: jarak tepi border</p>
            <p>border-spacing: jarak border</p>
            <br />

            <p>Attribut: </p>
            <p>width, height, text-align, colspan, rowspan</p>
            <br />

            <p>Caption: </p>
            <p>
              <CodeSpan>caption</CodeSpan>
            </p>
            <br />

            <p>Colgroup: </p>
            <p>
              <CodeSpan>colgroup</CodeSpan>
            </p>
          </>
        ),
      },
      {
        title: 'Lists',
        description: (
          <>
            <p>Unordered List: </p>
            <pre>
              <code>
                {`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
              </code>
            </pre>
            <p>Attribute: list-style-type</p>
            <br />

            <p>Ordered List: </p>
            <pre>
              <code>
                {`<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>`}
              </code>
            </pre>
            <p>Attribute: type, start </p>
            <br />

            <p>Ordered List: </p>
            <pre>
              <code>
                {`<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>`}
              </code>
            </pre>
          </>
        ),
      },
      {
        title: 'Block and Inline Elements',
        description: (
          <>
            <p>Block</p>
            <p>Dimulai dengan baris baru</p>
            <p>Otomatis mempunyai space sebelum dan sesudah elemen</p>
            <p>Full width</p>
            <p>Contoh :</p>
            <p>
              <CodeSpan>p</CodeSpan> dan <CodeSpan>div</CodeSpan>
            </p>
            <br />

            <p>Inline</p>
            <p>Tidak membuat baris baru</p>
            <p>Fit width</p>
            <p>Contoh :</p>
            <p>
              <CodeSpan>a</CodeSpan> dan <CodeSpan>span</CodeSpan>
            </p>
          </>
        ),
      },
      {
        title: 'Class dan Id',
        description: (
          <>
            <p>Class</p>
            <p>Menyeleksi elemen menggunakan css atau js</p>
            <br />
            <p>Id</p>
            <p>Menentukan atribut unik</p>
          </>
        ),
      },
      {
        title: 'Iframes',
        description: (
          <>
            <p>Menampilkan halaman web di dalam web</p>
            <p>
              <CodeSpan>iframe</CodeSpan>
            </p>
            <br />
            <p>Atribut:</p>
            <p>titile, width, height, border</p>
          </>
        ),
      },
      {
        title: 'Javascript',
        description: (
          <>
            <p>
              <CodeSpan>script</CodeSpan>
            </p>
          </>
        ),
      },
      {
        title: 'File Path',
        description: (
          <>
            <p>Absolute</p>
            <p>Full URL</p>
            <p>https://www.w3schools.com/images/picture.jpg</p>
            <br />
            <p>Relative (Direkomendasikan)</p>
            <p>Relatif ke halaman sekarang</p>
          </>
        ),
      },
      {
        title: 'Head',
        description: (
          <>
            <p>Kontainer untuk metadata</p>
            <p>Metadata adalah data tentang dokumen HTML</p>
            <br />
            <p>
              <CodeSpan>title</CodeSpan>
            </p>
            <p>Judul dokumen</p>
            <p>
              <CodeSpan>style</CodeSpan>
            </p>
            <p>Styling</p>
            <p>
              <CodeSpan>link</CodeSpan>
            </p>
            <p>Hubungan dengan dokumen eksternal</p>
            <p>
              <CodeSpan>meta</CodeSpan>
            </p>
            <p>Menentukan character set, deskripsi halaman, author, viewport</p>
            <p>
              <CodeSpan>script</CodeSpan>
            </p>
            <p>Mendefinisikan javascript</p>
            <p>
              <CodeSpan>base</CodeSpan>
            </p>
            <p>Menentukan baseurl</p>
          </>
        ),
      },
      {
        title: 'Layout',
        description: (
          <>
            <Image
              src="https://www.w3schools.com/html/img_sem_elements.gif"
              alt="html-layout"
              width={500}
              height={500}
            />
          </>
        ),
      },
      {
        title: 'Computer Code',
        description: (
          <>
            <p>
              <CodeSpan>kbd</CodeSpan> keyboard input
            </p>
            <p>
              <CodeSpan>samp</CodeSpan> output computer program
            </p>
            <p>
              <CodeSpan>code</CodeSpan> computer code
            </p>
            <p>
              <CodeSpan>var</CodeSpan> math expression
            </p>
            <p>
              <CodeSpan>pre</CodeSpan> preformatted text
            </p>
          </>
        ),
      },
      {
        title: 'Semantics',
        description: (
          <>
            <p>
              Menulis element sesuai makna, untuk membantu browser dan developer
            </p>
            <p>{`<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>`}</p>
            <br />
            <p>
              <CodeSpan>section</CodeSpan>
            </p>
            <p>
              Gunakan section untuk mengelompokkan, terutama jika ada heading
            </p>
          </>
        ),
      },
      {
        title: 'Character Entities',
        description: (
          <>
            <pre>{`< (less than) = &lt;
> (greather than) = &gt;
`}</pre>
          </>
        ),
      },
      {
        title: 'Symbol Entities',
        description: (
          <>
            <pre>{`<p>I will display &euro;</p>
<p>I will display &#8364;</p>
<p>I will display &#x20AC;</p>
`}</pre>
          </>
        ),
      },
      {
        title: 'Emoji',
        description: (
          <>
            <p>Contoh:</p>
            <pre>{`<p>&#128512;</p>`}</pre>
          </>
        ),
      },
      {
        title: 'URL Encode',
        description: (
          <>
            <p>
              <CodeSpan>scheme://prefix.domain:port/path/filename</CodeSpan>
            </p>
            <p>scheme: tipe layanan internet (https, ftp, dll)</p>
            <p>prefix: domain prefix</p>
            <p>domain: domain</p>
            <p>port: nomor port</p>
            <p>path: rootdir</p>
            <p>filename: nama file</p>
          </>
        ),
      },
    ],
  },
  {
    title: 'HTML Note',
    accordions: [
      {
        title: 'HTML Elemen',
        description: (
          <p>
            Beberapa tag html tidak <m></m>emiliki konten, seperti{' '}
            <CodeSpan>br</CodeSpan>
          </p>
        ),
      },
      {
        title: 'Case Sensitive',
        description: <p>tag html tidak case sensitive</p>,
      },
      {
        title: 'Headings',
        description: (
          <p>
            Gunakan html heading untuk heading saja, jangan gunakan untuk teks
            besar atau tebal
          </p>
        ),
      },
      {
        title: 'Links',
        description: (
          <p>
            Link tidak hanya untuk teks, tetapi juga bisa untuk gambar dan
            lainnya.
          </p>
        ),
      },
      {
        title: 'Images',
        description: (
          <p>
            Lebih baik tentukan width dan height gambar untuk menghindari
            flicker
          </p>
        ),
      },
      {
        title: 'Style Guide',
        description: (
          <>
            <p>Selalu deklarasikan dokumen</p>
            <p>
              <CodeSpan>!DOCTYPE html</CodeSpan>
            </p>
            <br />
            <p>Gunakan lowercase element</p>
            <br />
            <p>Selalu tutup tag</p>
            <p>Gunakan lowercase attribute</p>
            <p>Selalu tambahkan petik di attribute value</p>
            <p>Selalu tentukan alt, widht, dan heigt pada gambar</p>
            <p>Tambahkan spasi antar attribute atau tag</p>
            <p>Hindari long code lines</p>
            <p>Tambahkan lang attribute di html</p>
            <p>Simpan file dengan nama index.html</p>
          </>
        ),
      },
      {
        title: 'XHTML',
        description: (
          <>
            <p>Lebih strict</p>
            <p>&lt;!DOCTYPE html&gt; is recommended for HTML5 documents.</p>
            <p>
              The <code>xmlns</code> attribute in &lt;html&gt; is optional in
              HTML5 and is mainly used for XHTML documents.
            </p>
            <p>
              &lt;html&gt;, &lt;head&gt;, &lt;title&gt;, and &lt;body&gt; are
              strongly recommended to maintain proper HTML structure.
            </p>
            <p>Elements must always be properly nested</p>
            <p>Elements must always be closed</p>
            <p>Elements must always be in lowercase</p>
            <p>Attribute names must always be in lowercase</p>
            <p>Attribute values must always be quoted</p>
            <p>Attribute minimization is forbidden</p>
          </>
        ),
      },
    ],
  },
  {
    title: 'HTML Graphics',
    accordions: [
      {
        title: 'HTML Canvas',
        description: (
          <>
            <p>
              <CodeSpan>canvas</CodeSpan>
            </p>
            <p>
              canvas untuk kontainernya, untuk menggambar perlu menggunakan
              javascript
            </p>
          </>
        ),
      },
      {
        title: 'HTML SVG',
        description: (
          <p>
            <CodeSpan>svg</CodeSpan>
          </p>
        ),
      },
    ],
  },
  {
    title: 'HTML Media',
    accordions: [
      {
        title: 'HTML Video',
        description: (
          <>
            <p>
              <CodeSpan>video</CodeSpan>
            </p>
            <p>Only MP4, WebM, and Ogg.</p>
            <br />
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
              <code>
                {`<video width="320" height="240" autoplay muted>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
Your browser does not support the video tag.
</video>`}
              </code>
            </pre>
          </>
        ),
      },
      {
        title: 'HTML Audio',
        description: (
          <>
            <p>
              <CodeSpan>audio</CodeSpan>
            </p>
            <p>Only MP3, WAV, and Ogg.</p>
            <br />
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
              <code>
                {`<audio controls autoplay muted>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>`}
              </code>
            </pre>
          </>
        ),
      },
      {
        title: 'Youtube Embed',
        description: (
          <>
            <p>
              <CodeSpan>audio</CodeSpan>
            </p>
            <p>Only MP3, WAV, and Ogg.</p>
            <br />
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
              <code>
                {`<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>`}
              </code>
            </pre>
          </>
        ),
      },
    ],
  },
  {
    title: 'HTML Forms',
    accordions: [
      {
        title: 'Form',
        description: (
          <>
            <p>
              <CodeSpan>form</CodeSpan>
            </p>
            <p>
              canvas untuk kontainernya, untuk menggambar perlu menggunakan
              javascript
            </p>
            <p>Attribute: action, method, target, autocomplete, novalidate</p>
            <br />
            <p>
              <CodeSpan>input</CodeSpan>
            </p>
            <p>
              Attribut: type, id, name, value, readonly, disabled, size,
              maxlength, min, max, multiple, pattern, placeholder, require,
              autofocus
            </p>
            <br />
            <p>
              <CodeSpan>label</CodeSpan>
            </p>
            <p>Attribut: for</p>
          </>
        ),
      },
      {
        title: 'Form Elements',
        description: (
          <p>
            <CodeSpan>input</CodeSpan>
            <br />
            <CodeSpan>label</CodeSpan>
            <br />
            <CodeSpan>select</CodeSpan>
            <br />
            <CodeSpan>textarea</CodeSpan>
            <br />
            <CodeSpan>button</CodeSpan>
            <br />
            <CodeSpan>fieldset</CodeSpan>
            <br />
            <CodeSpan>legend</CodeSpan>
            <br />
            <CodeSpan>datalist</CodeSpan>
            <br />
            <CodeSpan>output</CodeSpan>
            <br />
            <CodeSpan>option</CodeSpan>
            <br />
            <CodeSpan>optgroup</CodeSpan>
            <br />
          </p>
        ),
      },
    ],
  },
  {
    title: 'HTML API',
    accordions: [
      {
        title: 'Geolocation',
        description: (
          <>
            <p>
              <CodeSpan>form</CodeSpan>
            </p>
          </>
        ),
      },
      {
        title: 'Drag and Drop',
        description: (
          <p>
            <CodeSpan>img draggable="true"</CodeSpan>
          </p>
        ),
      },
      {
        title: 'Web Storage',
        description: <p>window.localStorage & window.sessionStorage</p>,
      },
    ],
  },
]
