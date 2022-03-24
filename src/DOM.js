/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
  for (let i = 0; i < count; i++) {
    let el = document.createElement(tag)
    el.innerHTML = content

    document.body.append(el)
  }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
  let mainEl = document.createElement('div')
  mainEl.setAttribute('class', `item_1`)
  document.body.append(mainEl)
  for (let i = 0; i < level - 1; i++) {
    let elements = document.getElementsByClassName('item_' + (i + 1))
    for (let el of elements)
      for (let j = 0; j < childrenCount; j++)
        el.insertAdjacentHTML('beforeend', `<div class = "item_${i + 2}"></div>`)
  }
  return document.body.childNodes[0]
}
/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
  let tree = generateTree(2, 3)
  let secondLVL = document.getElementsByClassName('item_2')
  for (let div of secondLVL) {
    let section = document.createElement('section')
    section.setAttribute('class', 'item_2')
    section.innerHTML = div.innerHTML
    tree.replaceChild(section, div)
  }

  return tree
}
