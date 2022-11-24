const optionChanged = () => console.log('Hello');


d3.json('./assets/resources/samples.json').then(({names}) => {

    names.forEach(name => {
        d3.select('select').append('option').text(name)
    });

    optionChanged();
});