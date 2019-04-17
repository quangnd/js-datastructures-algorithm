import test from 'ava'
import naiveStringSearch from './naive-string-search'

test('Should return the amount of substring in big string', t => {
  t.is(naiveStringSearch('pwadfr adfrbb', 'xxx'), 0)
  t.is(naiveStringSearch('pwadfr adfrbb', 'adf'), 2)
  t.is(naiveStringSearch('pwadfr adfrbb', 'pwa'), 1)
  t.is(naiveStringSearch('pwadfr adfrbbdfrx', 'dfr'), 3)
})
