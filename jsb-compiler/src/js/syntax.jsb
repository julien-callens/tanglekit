<props>
    let variable = 'value';
</props>

<code>
    import NestedComponent from './NestedComponent';
    import AnotherNestedComponent from './AnotherNestedComponent';

    // This is a comment
    // this code block is mostly default js code

    function handleClick() {
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
