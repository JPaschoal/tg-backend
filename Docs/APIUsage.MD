# Usage:

## Login:

**Description**: Make login on Fatec API;

**Route**: /login

**Type**: Post

**Params**: {
  login,
  password
}

**Return**: 
  success: {status: logged}
  failed: {status: notLogged}

## Perfil

**Description**: Return a JSON with perfil informations;

**Route**: /perfil

**Type**: Get

**Return**: 
  success: {
    averageGrade,
    birthday,
    code,
    course,
    cpf,
    email,
    name,
    period,
    picture,
    progress,
    unit
  }
  failed: {
    status: "notLogged"
  }

## Schedule

**Description**: Return a JSON with the schedule;

**Route**: /schedule

**Type**: Get

**Return**: 
  success: {
    [
      {
      "weekday",
      "periods": [
        {
          "discipline": {
            code,
            classroomCode
          },
          "endAt,
          "startAt
        }
        ]
      },
    ]
  }
  failed: {
    status: "notLogged"
  }

## Enrolled Disciplines

## Calendar

## Grades

## Logout