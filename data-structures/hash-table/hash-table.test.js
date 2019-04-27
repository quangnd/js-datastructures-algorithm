import test from 'ava'
import HashTable from './hash-table'

test(`Should create empty HashTable`, t => {
  const hashTable = new HashTable(0)
  t.is(hashTable.keyMap.length, 0)
})

test(`Should insert a key/value pair into HashTable with set(key, value) and get value with get(key)`, t => {
  const hashTable = new HashTable(17)
  hashTable.set('maroon', '#800000')
  hashTable.set('yellow', '#FFFF00')
  hashTable.set('olive', '#808000')
  hashTable.set('salmon', '#FA8072')

  t.is(hashTable.get('maroon'), '#800000')
  t.is(hashTable.get('salmon'), '#FA8072')
})

test(`Should return key list with keys()`, t => {
  const hashTable = new HashTable(17)
  hashTable.set('maroon', '#800000')
  hashTable.set('yellow', '#FFFF00')
  hashTable.set('olive', '#808000')
  hashTable.set('salmon', '#FA8072')

  t.is(hashTable.keys().length, 4)
  t.is(hashTable.keys().includes('maroon', 'yellow', 'olive', 'salmon'), true)
})

test(`Should return value list with values()`, t => {
  const hashTable = new HashTable(17)
  hashTable.set('maroon', '#800000')
  hashTable.set('yellow', '#FFFF00')
  hashTable.set('olive', '#808000')
  hashTable.set('salmon', '#FA8072')

  t.is(hashTable.values().length, 4)
  t.is(hashTable.values().includes('#800000', '#FFFF00', '#08000', '#FA8072'), true)
})




