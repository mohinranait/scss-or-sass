## SASS or SCSS - Date:09/02/14
![The San Juan Mountains are beautiful!](https://raw.githubusercontent.com/mohinranait/scss-or-sass/main/day-2/Screenshot_5.png "San Juan Mountains")


- Conditionallay style using @if,  @else 
```
# Example 

@mixin btnSize($value){

    @if $value == 'small' {
        padding: 7px 10px;
        font-size: 13px;
    }
    @else if $value == 'large'{
        padding: 14px 20px;
        font-size: 17px;
    } @else if $value == 'extralarge' {
        padding: 18px 25px;
        font-size: 18px;
    }
}
```
- @extend
- @mixin & @include
- File structure
- one selector should inherit the styles of another.
```
// Example 
.btns {
    @extend .btn;
    border: transparent;
    &-success{
        background-color: rgb(3, 144, 83);
        color: value.$bodyColor;
      
    };
    &-dark{
        background-color: black;
        color: value.$bodyColor;
    };
    &-purple{
        background-color: purple;
        color: value.$bodyColor;
    }
    &-medium{
        @include value.btnSize('medium')
    }
    &-small{
        @include value.btnSize('small')
    }
    &-large{
        @include value.btnSize('large')
    }
    &-extralarge{
        @include value.btnSize('extralarge')
    }
}

```


- Extent: https://sass-lang.com/documentation/at-rules/extend/
- Mixin : https://sass-lang.com/documentation/values/mixins/
- Condition: https://sass-lang.com/documentation/at-rules/control/if/
