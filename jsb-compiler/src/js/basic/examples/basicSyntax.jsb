<import>
    "./styles.css";
    NestedComponent from './NestedComponent.jsb';
    AnotherNestedComponent from './AnotherNestedComponent.jsb';
</import>

<code>
    let test = 'balls';
</code>

<div class='randomClass'>
        <p class={{variable}}>variable: {{variable}}</p>

        <NestedComponent prop="beans" prop2={{1}} />
        <AnotherNestedComponent>
            content of AnotherNestedComponent
        </AnotherNestedComponent>
</div>
