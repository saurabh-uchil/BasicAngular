import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name: 'tolower'
})

export class ChildPipe implements PipeTransform{
    transform(name:string) : string{
        return name.toUpperCase()
    }
}