### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

1. Answer:
* getElementById: {Select an element by unique. and return A single element object.}
* getElementsByClassName: {
  to select all element. when need to loop to access each element.
}
* querySelector{
  select the first element in css selector. 
  And return a single element object
}
* querySelectorAll{
  select All element in css selector.
  return it a nodeList.
}


2. How do you **create and insert a new element into the DOM**?
2. Answer:
{
  * create an element > document.createElement('tagName')
  * add content > innerText, innerHTML, appendChild
  * set attribute or class > setAttribute, classList.add
  * insert into the DOM > appendChild, replaceChild ect
}


3. What is **Event Bubbling** and how does it work?
3. answer {
  * Event on a child element
  * even first fire on the actual target
  * even then moves upward
}


4. What is **Event Delegation** in JavaScript? Why is it useful?
4. answer {
  * event delegation is a technique in javascript, we add a single event listener to their parent.

  Why is it useful?
  * it's performance faster
  * if new child elements are added later
  * removing many listener
}


5. What is the difference between **preventDefault() and stopPropagation()** methods?
5. answer{
  **preventDefault(){
    * Default behavior of an element
    * it does not stop the event from bubbling
  }

**stopPropagation(){
  * it does not prevent the default of the element
  * stop the event from bubbling to parent elenents
}

}
