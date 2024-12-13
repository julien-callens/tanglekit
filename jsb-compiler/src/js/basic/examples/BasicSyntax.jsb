<import>
    "./styles.css";
    NestedComponent from './NestedComponent.jsb';
    AnotherNestedComponent from './AnotherNestedComponent.jsb';
</import>

<code>
    let variable = 'balls';
</code>

<div class='randomClass'>
        <p class={{variable}}>variable: {{variable}}</p>

        <NestedComponent prop="beans" prop2={{variable}} />
        <AnotherNestedComponent>
            <p>content of AnotherNestedComponent</p>
            test
            <AnotherNestedComponent>
                        <p>content of AnotherNestedComponent</p>
                        test
                    </AnotherNestedComponent>
        </AnotherNestedComponent>
</div>
