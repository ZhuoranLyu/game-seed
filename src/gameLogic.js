angular.module('myApp', ['ngTouch', 'ui.bootstrap'])
.factory('gameLogic', function() {

  'use strict';

  /** Returns the initial board. */
  function getInitialBoard() {
    // TODO: return the initial board.
    return {};
  }

  function getRandomMove(state, turnIndexBeforeMove) {
    // TODO: return a random move which the computer will do.
    return [{setTurn: {turnIndex: 1 - turnIndexBeforeMove}}];
  }

  function createMove(state, turnIndexBeforeMove, userChoices) {
    if (state.board === undefined) {
      // Initially (at the beginning of the match), the board in state is undefined.
      state.board = getInitialBoard();
    }
    // TODO: create move.
    // Example operations:
    // {endMatch: {endMatchScores: [1, 0]}}
    // {set: {key: 'someKey', value: 'anyValue'}}
    return [
        {setTurn: {turnIndex: 1 - turnIndexBeforeMove}}, 
        {set: {key: 'someKey', value: userChoices}}
    ];
  }

  function isMoveOk(params) {
    var move = params.move;
    var turnIndexBeforeMove = params.turnIndexBeforeMove;
    var stateBeforeMove = params.stateBeforeMove;
    // The state and turn after move are not needed in any game where all state is public.
    //var turnIndexAfterMove = params.turnIndexAfterMove;
    //var stateAfterMove = params.stateAfterMove;
    try {
      // TODO: extract userChoices from move.
      var userChoices = {};
      var expectedMove = createMove(stateBeforeMove, turnIndexBeforeMove, userChoices);
      if (!angular.equals(move, expectedMove)) {
        return false;
      }
    } catch (e) {
      // if there are any exceptions then the move is illegal
      return false;
    }
    return true;
  }

  return {
      getInitialBoard: getInitialBoard,
      getRandomMove: getRandomMove,
      createMove: createMove,
      isMoveOk: isMoveOk
  };
});
