const l = [
  {
    label: "exactDate",
    value: "date"
  },
  {
    label: "dateRange",
    value: "range"
  },
  {
    label: "today",
    value: "today"
  },
  {
    label: "tomorrow",
    value: "tomorrow"
  },
  {
    label: "yesterday",
    value: "yesterday"
  },
  {
    label: "thisWeek",
    value: "current-week"
  },
  {
    label: "lastWeek",
    value: "last-week"
  },
  {
    label: "thisMonth",
    value: "current-month"
  },
  {
    label: "lastMonth",
    value: "last-month"
  },
  {
    label: "withinThePastSevenDays",
    value: "past-seven-days"
  },
  {
    label: "withinThePastThirtyDays",
    value: "past-thirty-days"
  }
], a = [
  {
    type: "number",
    logicList: [
      {
        logic: "equal",
        handler(e, r) {
          return Number(e) === Number(r);
        }
      },
      {
        logic: "gt",
        handler(e, r) {
          return Number(e) > Number(r);
        }
      },
      {
        logic: "lt",
        handler(e, r) {
          return Number(e) < Number(r);
        }
      },
      {
        logic: "gte",
        handler(e, r) {
          return Number(e) >= Number(r);
        }
      },
      {
        logic: "lte",
        handler(e, r) {
          return Number(e) <= Number(r);
        }
      },
      {
        logic: "notEqual",
        handler(e, r) {
          return Number(e) !== Number(r);
        }
      },
      {
        logic: "empty",
        handler(e) {
          return e == null || !e.toString();
        }
      },
      {
        logic: "nonEmpty",
        handler(e) {
          return !(e == null || !e.toString());
        }
      }
    ]
  },
  {
    type: "string",
    logicList: [
      {
        logic: "equal",
        handler(e, r, n) {
          return n ? String(e).toLowerCase() === String(r).toLowerCase() : String(e) === String(r);
        }
      },
      {
        logic: "notEqual",
        handler(e, r, n) {
          return n ? String(e).toLowerCase() !== String(r).toLowerCase() : String(e) !== String(r);
        }
      },
      {
        logic: "contain",
        handler(e, r, n) {
          return n ? String(e).toLowerCase().includes(String(r).toLowerCase()) : String(e).includes(String(r));
        }
      },
      {
        logic: "empty",
        handler(e) {
          return !e;
        }
      },
      {
        logic: "nonEmpty",
        handler(e) {
          return !!e;
        }
      }
    ]
  },
  {
    type: "date",
    logicList: [
      {
        logic: "equal",
        handler(e, r) {
          return Array.isArray(r) ? t(e) > t(r[0]) && t(e) < t(r[1]) : t(e) === t(r);
        }
      },
      {
        logic: "before",
        handler(e, r) {
          return t(e) < t(r);
        }
      },
      {
        logic: "after",
        handler(e, r) {
          return t(e) > t(r);
        }
      },
      {
        logic: "empty",
        handler(e) {
          return !e;
        }
      },
      {
        logic: "nonEmpty",
        handler(e) {
          return !!e;
        }
      }
    ]
  },
  {
    type: "time",
    logicList: [
      {
        logic: "equal",
        handler(e, r) {
          return Array.isArray(r) ? e > r[0] && e < r[1] : e === r;
        }
      },
      {
        logic: "before",
        handler(e, r) {
          return e < r;
        }
      },
      {
        logic: "after",
        handler(e, r) {
          return e > r;
        }
      },
      {
        logic: "empty",
        handler(e) {
          return !e;
        }
      },
      {
        logic: "nonEmpty",
        handler(e) {
          return !!e;
        }
      }
    ]
  }
];
function t(e) {
  return e instanceof Date ? e.getTime() : new Date(e).getTime();
}
export {
  l as dateTypeOptions,
  a as logicOptions
};
