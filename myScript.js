function showCodeExample(tagName, index) {
    var codeBox = document.getElementById('codeBox' + index);
    var outputBox = document.getElementById('outputBox' + index);
    var exampleCode = '';

    switch (tagName) {

        // For Block 1
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
            exampleCode = '<' + tagName + '>This is a ' + tagName.toUpperCase() + ' Heading</' + tagName + '>\n' +
                            '<p>This is some text under the ' + tagName.toUpperCase() + ' heading.</p>';
            break;

        // For Block 2
        case 'p':
            exampleCode = '<p>This is a paragraph.</p>';
            break;

        case 'pre':
            exampleCode = '<pre>\n    This is preformatted text.\n    It preserves both spaces and\n    line breaks.</pre>';
            break;

        case 'br':
            exampleCode = '<p>This is a line of text.<br>This is a new line of text.</p>';
            break;

        case 'hr':
            exampleCode = '<p>This is some content above the horizontal rule.</p>\n<hr>\n<p>This is some content below the horizontal rule.</p>';
            break;

        // For Block 3
        case 'b':
            exampleCode = '<b>This is a Bold Text</b> <b>This is a plain text</b>';
            break;
        
        case 'strong':
            exampleCode = '<strong>This is a strong text</strong> <p>and this is a plain text</p>';
            break;

        case 'i':
            exampleCode = '<p>This is a Plain text</p> <i>& this is an italic text</i>';
            break;

        case 'em':
            exampleCode = '<em>This is an emphasized text</em> <p>and this is a plain text</p>';
            break;

        case 'mark':
            exampleCode = '<p>This is <mark>marked</mark></p>';
            break;

        case 'small':
            exampleCode = '<small>This is a smaller Text</small>';
            break;
        
        case 'del':
            exampleCode = '<del>This is a deleted text</del> <p>But this is not</p>';
            break;

        case 'ins':
            exampleCode = '<ins>This is a inserted text</ins>';
            break;

        case 'sub':
            exampleCode = '<sub>This is a subscript text</sub><p>H<sub>2</sub>O</p>';
            break;

        case 'sup':
            exampleCode = '<sup>This is superscript text</sup><p>X<sup>2</sup></p>';
            break;

        //For Block 4

        case 'blockquote':
            exampleCode = 'This is an <blockquote cite="https://www.w3schools.com/html/html_quotation_elements.asp"> This Cite will contain the link of source. This text is quoted form another source</blockquote> <p>and this is a plain text</p>';
            break;

        case 'q':
            exampleCode = '<q>q is used for short quotations</q> <p>Here you can compare between plin text and quotation.</p>';
            break;

        case 'abbr':
            exampleCode = '<p>This tag is used for abbreviations and an acronym like-</p> <abbr>Mr.</abbr> <p>Aditya Bhatt or</p> <abbr>Who</abbr> <p>Which stands for world health organization.</p>';
            break;
        
        case 'address':
            exampleCode = "<p>This tag defines the contact information for the author/owner of a document or an article</p><address>This project is started by Aditya Bhatt.<br>Visit us at:<br>https://sites.google.com/view/adityasresume/about<br>India</address>";
            break;

        case 'cite':
            exampleCode = '<p>This is used for the title of a creative work<br>Which looks similar to italic text.<br><cite>The Road Not Taken</cite> by Rober Frost. Written in August 1915.</p>';
            break;

        case 'bdo':
            exampleCode = '<p>This defines the direction of text for example:</p><br><bdo dir="rtl">This is right to left text</bdo>';
            break;

    }

    codeBox.innerText = exampleCode;
    outputBox.innerHTML = exampleCode;

    // Toggle visibility
    codeBox.style.display = (codeBox.style.display === 'none') ? 'block' : 'none';
    outputBox.style.display = (outputBox.style.display === 'none') ? 'block' : 'none';
}

//Function to handle color changing operations in Color Section 
var currentColor = { r: 0, g: 0, b: 0, a: 0 };

        function updateColorBox() {
            var colorBox = document.getElementById('colorBox');
            colorBox.style.backgroundColor = `rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, ${currentColor.a})`;
        }

        function toggleColor(color) {
            switch (color) {
                case 'red':
                    currentColor.r = (currentColor.r === 255) ? 0 : 255;
                    break;
                case 'green':
                    currentColor.g = (currentColor.g === 255) ? 0 : 255;
                    break;
                case 'blue':
                    currentColor.b = (currentColor.b === 255) ? 0 : 255;
                    break;
            }
            updateColorBox();
        }

        function toggleOpacity() {
            currentColor.a = (currentColor.a === 1) ? 0 : 1;
            updateColorBox();
        }

        // Initialize the color box
        updateColorBox();