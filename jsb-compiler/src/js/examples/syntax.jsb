<import>
"./styles.css";
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

    handleClick("benas", "balls");
</code>

<div class='randomClass'>
        <p class={{variable}}>variable: {{variable}}</p>
        <button onClick={{handleClick()}}>Click me</button>
        {{ if (test === 'balls') }}
            <NestedComponent/>
        {{ else if (test === 'benas') }}
            <AnotherNestedComponent>
                content of AnotherNestedComponent
            </AnotherNestedComponent>
        {{ else }}
            {{children}}
        {{ /if }}

</div>
