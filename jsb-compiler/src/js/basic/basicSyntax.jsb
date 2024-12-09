<import>
    NestedComponent from './NestedComponent';
    AnotherNestedComponent from './AnotherNestedComponent';
</import>

<props>
    let variable = 'value';
</props>

<code>
    let test = 'balls';
</code>

<div class='randomClass'>
        <p class={{variable}}>variable: {{variable}}</p>

            <NestedComponent/>
            <AnotherNestedComponent>
                content of AnotherNestedComponent
            </AnotherNestedComponent>
</div>
