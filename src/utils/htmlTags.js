export const HTML_TAGS = [
    {
        label: "Structural Elements",
        items: [
            { label: "html", element: "<html></html>", description: "Defines the root of an HTML document." },
            {
                label: "head",
                element: "<head></head>",
                description: "Contains metadata or links to external resources.",
            },
            {
                label: "title",
                element: "<title></title>",
                description: "Specifies the document's title displayed in the browser's title bar or tab.",
            },
            {
                label: "base",
                element: "<base />",
                description: "Specifies the base URL/target for all relative URLs in a document.",
                singleTag: true,
            },
            {
                label: "body",
                element: "<body></body>",
                description: "Contains the content of an HTML document visible to the user.",
            },
        ],
    },
    {
        label: "Text Content Elements",
        items: [
            { label: "p", element: "<p></p>", description: "Defines a paragraph of text." },
            {
                label: "hr",
                element: "<hr />",
                description: "Represents a thematic break or division between paragraphs.",
                singleTag: true,
            },
            {
                label: "pre",
                element: "<pre></pre>",
                description: "Defines preformatted text, preserving both spaces and line breaks.",
            },
            {
                label: "blockquote",
                element: "<blockquote></blockquote>",
                description: "Indicates a section of quoted content from another source.",
            },
            { label: "ol", element: "<ol></ol>", description: "Defines an ordered (numbered) list of items." },
            { label: "ul", element: "<ul></ul>", description: "Defines an unordered (bulleted) list of items." },
            { label: "li", element: "<li></li>", description: "Represents an item in a list." },
            {
                label: "dl",
                element: "<dl></dl>",
                description: "Defines a description list with terms and descriptions.",
            },
            { label: "dt", element: "<dt></dt>", description: "Defines a term (name) in a description list." },
            {
                label: "dd",
                element: "<dd></dd>",
                description: "Defines the description (value) of a term in a description list.",
            },
            {
                label: "figure",
                element: "<figure></figure>",
                description: "Represents self-contained content, often with a caption.",
            },
            {
                label: "figcaption",
                element: "<figcaption></figcaption>",
                description: "Represents a caption or legend for a figure element.",
            },
            { label: "div", element: "<div></div>", description: "Defines a division or section in an HTML document." },
            {
                label: "a",
                element: "<a></a>",
                description: "Defines a hyperlink, linking to another web page or resource.",
            },
            { label: "em", element: "<em></em>", description: "Indicates emphasis, typically displayed in italics." },
            {
                label: "strong",
                element: "<strong></strong>",
                description: "Indicates strong importance, typically displayed in bold.",
            },
            {
                label: "small",
                element: "<small></small>",
                description: "Defines smaller text, often used for disclaimers or legal text.",
            },
            {
                label: "s",
                element: "<s></s>",
                description:
                    "Represents text that is no longer accurate or relevant, often rendered with a strikethrough.",
            },
            {
                label: "cite",
                element: "<cite></cite>",
                description: "Indicates a citation or reference to a creative work, such as a book or movie.",
            },
            { label: "q", element: "<q></q>", description: "Defines a short inline quotation." },
            { label: "dfn", element: "<dfn></dfn>", description: "Represents the defining instance of a term." },
            { label: "abbr", element: "<abbr></abbr>", description: "Defines an abbreviation or acronym." },
            {
                label: "ruby",
                element: "<ruby></ruby>",
                description: "Defines a ruby annotation for pronunciation or translation.",
            },
            { label: "rb", element: "<rb></rb>", description: "Defines the base text component of a ruby annotation." },
            {
                label: "rt",
                element: "<rt></rt>",
                description: "Defines the pronunciation or translation component of a ruby annotation.",
            },
            {
                label: "rp",
                element: "<rp></rp>",
                description: "Defines parentheses around ruby text components that are not supported.",
            },
            {
                label: "data",
                element: "<data></data>",
                description: "Represents the result of a calculation or machine-readable text.",
            },
            { label: "time", element: "<time></time>", description: "Represents a specific period in time or a date." },
            { label: "code", element: "<code></code>", description: "Defines a fragment of computer code." },
            {
                label: "var",
                element: "<var></var>",
                description: "Defines a variable in a mathematical or programming context.",
            },
            {
                label: "samp",
                element: "<samp></samp>",
                description: "Represents sample output from a computer program.",
            },
            {
                label: "kbd",
                element: "<kbd></kbd>",
                description: "Represents user input, typically rendered in a monospaced font.",
            },
            { label: "sub", element: "<sub></sub>", description: "Defines subscript text." },
            { label: "sup", element: "<sup></sup>", description: "Defines superscript text." },
            {
                label: "i",
                element: "<i></i>",
                description: "Indicates text in an alternate voice or mood, often rendered in italics.",
            },
            {
                label: "b",
                element: "<b></b>",
                description: "Represents text stylistically offset from normal prose, often rendered in bold.",
            },
            {
                label: "u",
                element: "<u></u>",
                description: "Defines text with an unarticulated, though explicitly rendered, non-textual annotation.",
            },
            {
                label: "mark",
                element: "<mark></mark>",
                description:
                    "Defines text highlighted for reference or emphasis, often rendered with a yellow background.",
            },
            {
                label: "bdi",
                element: "<bdi></bdi>",
                description:
                    "Isolates a span of text that might be formatted in a different direction from other text outside it.",
            },
            { label: "bdo", element: "<bdo></bdo>", description: "Overrides the current text direction." },
            { label: "span", element: "<span></span>", description: "Defines a generic span of inline text." },
            { label: "br", element: "<br />", description: "Represents a line break.", singleTag: true },
            {
                label: "wbr",
                element: "<wbr />",
                description: "Represents a word break opportunity within text.",
                singleTag: true,
            },
        ],
    },
    {
        label: "Form Elements",
        items: [
            { label: "form", element: "<form></form>", description: "Represents a user-submittable form." },
            { label: "label", element: "<label></label>", description: "Defines a label for an input element." },
            {
                label: "input",
                element: "<input />",
                description: "Defines an input control, such as a text field or checkbox.",
                singleTag: true,
            },
            { label: "button", element: "<button></button>", description: "Defines a clickable button." },
            { label: "select", element: "<select></select>", description: "Defines a dropdown list." },
            {
                label: "datalist",
                element: "<datalist></datalist>",
                description: "Specifies a list of pre-defined options for input controls.",
            },
            {
                label: "optgroup",
                element: "<optgroup></optgroup>",
                description: "Groups related options in a select element.",
            },
            { label: "option", element: "<option></option>", description: "Defines an option in a select element." },
            {
                label: "textarea",
                element: "<textarea></textarea>",
                description: "Defines a multiline text input control.",
            },
            {
                label: "output",
                element: "<output></output>",
                description: "Represents the result of a calculation or user action.",
            },
            { label: "progress", element: "<progress></progress>", description: "Represents the progress of a task." },
            {
                label: "meter",
                element: "<meter></meter>",
                description: "Represents a scalar measurement within a known range.",
            },
            { label: "fieldset", element: "<fieldset></fieldset>", description: "Groups related elements in a form." },
            { label: "legend", element: "<legend></legend>", description: "Represents a caption for a fieldset." },
        ],
    },
    {
        label: "Table Elements",
        items: [
            { label: "table", element: "<table></table>", description: "Defines a table." },
            { label: "caption", element: "<caption></caption>", description: "Represents the title of a table." },
            {
                label: "colgroup",
                element: "<colgroup></colgroup>",
                description: "Defines a group of columns within a table.",
            },
            {
                label: "col",
                element: "<col />",
                description: "Defines attributes for table columns that apply to multiple columns.",
                singleTag: true,
            },
            { label: "tbody", element: "<tbody></tbody>", description: "Groups table rows into a body section." },
            { label: "thead", element: "<thead></thead>", description: "Groups table rows into a header section." },
            { label: "tfoot", element: "<tfoot></tfoot>", description: "Groups table rows into a footer section." },
            { label: "tr", element: "<tr></tr>", description: "Defines a row in a table." },
        ],
    },
];
