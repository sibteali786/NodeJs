const {getNewUser, mapObjectToArray} = require('./utils')   

describe('mapObjectToArray',()=>{
    test('maps values to array using callback',()=>{
        const result  = mapObjectToArray({age:30,height:65},(k,v)=>{
            return v+10
        })
        expect(result).toEqual([40,75])
    })

    test('callback gets called',()=>{
        const mockCB = jest.fn()
        const result  = mapObjectToArray({age:30,height:65},mockCB)

        expect(mockCB.mock.calls.length).toBe(2);
    })

})