<import>
    NestedComponent from './NestedComponent';
    AnotherNestedComponent from './AnotherNestedComponent';
</import>

<props>
    let variable = 'value';
</props>

<code>
    // This is a comment
    // this code block is mostly default js code

    let test = 'balls';

    function handleClick(benas, test) {
        if (variable === 'value') {
            console.log('Variable is equal to value');
        }
        console.log('Button clicked');
    }
</code>

<div class='randomClass'>
        <p class={{variable}}>variable: {{variable}}</p>
        <button onClick={{handleClick()}}>Click me</button>
        <NestedComponent/>
        <AnotherNestedComponent>
            content of AnotherNestedComponent
        </AnotherNestedComponent>

       {{children}}
</div>
