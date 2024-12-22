const greetings = [
    'Merry Christmas and Happy New Year!',
    'Wishing you a season full of joy and happiness!',
    'May your Christmas be filled with love and laughter!',
    'Season’s greetings to you and your family!',
    'May this Christmas bring you lots of happiness and good cheer!',
    'Warmest wishes for a Merry Christmas!',
    'Hope your Christmas is as wonderful as you are!',
    'Have a very Merry Christmas and a Happy New Year!',
    'Wishing you peace, love, and joy this Christmas!',
    'May your holiday season be wrapped in joy and filled with love!',
    'Enjoy the magic of Christmas and the joy it brings!',
    'Sending you Christmas blessings and a Happy New Year!',
    'Here’s to a Christmas filled with warmth, love, and happiness!',
    'Wishing you good times, good cheer, and a Merry Christmas!',
    'Hope this festive season brings happiness and peace to you!',
    'May your Christmas sparkle with joy and good cheer!',
    'Wishing you a season of joy and love!',
    'May the holiday spirit bring you love, joy, and peace!',
    'Sending you love and light this holiday season!',
    'Merry Christmas to you and yours!',
    'May all your dreams come true this holiday season!',
    'Hope your Christmas is filled with warmth, peace, and love!',
    'Wishing you a Christmas full of love and magic!',
    'Have yourself a merry little Christmas!',
    'Merry Christmas and all the best for the New Year!'
];

function showGreeting() {
    const greetingText = document.getElementById('greeting');
    if (greetingText) {
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingText.classList.add('show');
        greetingText.textContent = randomGreeting;
    }
}